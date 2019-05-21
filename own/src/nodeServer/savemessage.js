const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const MessageSchema = new Schema({
	tilte: {type: String, default:"chatapp_history"},
	name: {
		type: String,
		required: [true, 'Name field is required.']
	},
	body: {
		type: String,
		required: [true, 'Body field is required.']
    },
    time:{
        type: String,
        required :[true,'Time field is required.']
    }
})

// Creating a table within database with the defined schema
const SaveMessage = mongoose.model('savemessage', MessageSchema)

// Exporting table for querying and mutating
module.exports = SaveMessage
