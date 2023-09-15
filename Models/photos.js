const mongoose = require('mongoose')

const photosModel = new mongoose.Schema({
    created_at: {
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    },
    name: {
        type:String,
        require:true
    },
    desc: {
        type:String,
        require:true
    },
    mime_type: {
        type: Number
    },
    media_metadata:{
        type:JSON
    }
})
const photoModel = mongoose.model('photos', photosModel)
module.exports = photoModel