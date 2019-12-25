const path = require('path');
const  express = require('express');
const app = express();
// const cors = require('cors');
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 5000;
var middlewareCors = require('./middleware/middlewareCors')
const allPosts =  require('./routes/allPosts')
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// var corsOptions = {
//     origin: '*',
//     allowedHeaders:'Access-Control-Allow-Origin : *',
//     methods:'POST, GET, PUT, DELETE, POTIONS'
// }
// cors(corsOptions),

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(middlewareCors);
app.use('/allPosts/', allPosts);


app.listen(PORT, () => {

    console.log(`server starting on port ${PORT}`);
})
