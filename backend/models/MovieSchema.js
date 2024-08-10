const mongoose = require("mongoose")
const MovieSchema = new mongoose.Schema({
    

    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required : true
    },

    price:{
        type:String,
        required:true
    },

    genre:{
        type:String,
        required : true
    },
    
    
    rating:{
        type:Number,
        required:true
    },

    languages:{
        type:Array,
        required:true
    }
})

const MovieCollection = mongoose.model('movies',MovieSchema)
module.exports = MovieCollection;