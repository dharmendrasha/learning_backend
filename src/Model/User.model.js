const {Schema, model} = require('mongoose')

const UserSchema = new Schema({

    name:{
        type: Schema.Types.String,
        required: true
    },
    role:{
        type: Schema.Types.String,
        required: true
    }

}, {timestamps: false})

module.exports = model('user', UserSchema)
