const express = require('express')
const dotenv = require('dotenv')
const app = express()
const colors = require('colors')
dotenv.config({ path : './config/config.env' })

require('./config/database_connection').connectDB()

// Load env variables
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use( require('./middlewares/logger').logger )


// HOME ROUTE
app.get('/', (req, res)=>{
    res.send('HI')
})


// OTHER ROUTES
app.use('/api/v1/bootcamps', require('./routes/bootcamps'))

const server = app.listen(
    process.env.PORT || 3001,
    console.log(`
        server listining on port ${process.env.PORT || 3001}
        on mode: ${process.env.NODE_ENV}
    `)
)

process.on('unhandledRejection', (err, promise)=>{
    console.log('Error: ' +  err.message)
    // close the server 
    server.close(()=> process.exit(1))

})
