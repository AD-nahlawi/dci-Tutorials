const colors = require('colors')

const mongoose = require('mongoose')

module.exports.connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    console.log(`database connected : ${conn.connection.host}`.cyan.underline.bold)
}

