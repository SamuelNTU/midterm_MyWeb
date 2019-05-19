const express = require('express')
const mongoose = require('mongoose')
const path=require('path')
const Message = require('./message')
const mw = require('./middleware/Time.js')


// Create server to serve index.html
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 5000

app.use(mw({ option1: '1'}))


app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
  })

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })


// Routing
app.use('/img',express.static(path.join(__dirname,'public')))

app.use(function (req, res, next) {
    res.status(404).send("<h1>Error 404</h1> <br/>Sorry can't find that!")
  })

// Socket.io serverSocket
const serverSocket = require('socket.io')(http)

// Start server listening process.
http.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})

// Connect to mongo
mongoose.connect('mongodb+srv://Samuel:samuellily1811@cluster0-9lanp.gcp.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

db.once('open', () => {
    console.log('MongoDB connected!')
    serverSocket.on('connection', socket => {
        const sendStatus = s => {
            socket.emit('status', s)
        }

        // First time running
        Message.find().limit(100)
            .sort({ _id: 1 })
            .exec((err, res) => {
                if (err) throw err

                socket.emit('init', res)
            })

        socket.on('input', data => {
            let name = data.name
            let body = data.body

            // Check for name and message
            if (name == '' || body == '') {
                // Send error status
                sendStatus('Please enter a name and message')
            } else {
                // Insert message
                const message = new Message({ name, body })
                message.save(err => {
                    if (err) console.error(err)

                    serverSocket.emit('output', [data])

                    // Saved!
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    })
                })
            }
        })

        socket.on('clear', () => {
            // Remove all chats from collection
            Message.deleteMany({}, () => {
                // Emit cleared
                socket.broadcast.emit('cleared')
            })
        })
    })
})
