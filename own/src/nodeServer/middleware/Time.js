module.exports = function (options) {
    return function (req, res, next) {
      if(options['1']==1)
      // Implement the middleware function based on the options object
        console.log('Time:', Date.now())
      if(options['2']==1)
        console.log('Request type:',req.method)
        console.log('Request URL:', req.originalUrl)
        next()
    }
  }