const mongoose = require('mongoose')

const BootcmapSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[ true, 'Please add a name '],
         unique: true,
         trim:true,
         maxlength : [50, 'name can not be more than 50 charachter'],


    },
    discription : {
        type: String,
        required : [ true, 'Please add a discription '],
        unique : false,
        trim : false,
        maxlength: [500, 'discription can not be more than 500 charachter'],
    },
    website : {
        type: String,
        required : [ true, 'Please add a website '],
        unique : true,
        maxlength: [500, 'discription can not be more than 500 charachter'],
        //match : [ /https?:\/\/(www./)?[-a-zA-Z],   ]


    },
    email : {
        type : String,
        required : true,
        // match: [ '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$.' , 'Please add a valid email']    
    },
    address: {
        type :  String,
        required : [true, 'please add an address']
    },
    photo: {
        type:String,
        default:'no-photo.jpg'
    }

})
module.exports = mongoose.model('Bootcamp', BootcmapSchema)



