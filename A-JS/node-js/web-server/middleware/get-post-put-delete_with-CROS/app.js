const path = require('path');
const  express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin:'*'
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);
app.use('/allPosts/', require('./routes/api/allPosts'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(PORT, () => {

    console.log(`server starting on port ${PORT}`);
})
