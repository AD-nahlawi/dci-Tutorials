const express = require('express')
const mysql = require('mysql')
const app = express();


// create connection to database
const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs'

});
// connect to database 
database.connect((err)=>{
    if (err) throw err;

    console.log('connected to database :-)')
})

// home page
app.get('/',(req, res)=>{
    res.send('trys')
}) 

// // create database 
app.get('/createdatabase',(req, res)=>{

    let sql = 'create database nodejs'
    database.query(sql, (err,result)=>{
        if (err) throw err;
        console.log('database is created');
         
        res.send(result)
    })
}) 

// create table
app.get('/createtable',(req, res)=>{
    let sql = 'create table posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
        
    database.query(sql, (err,result)=>{
        if (err) throw err;
        res.send('table is created')
    }) 
}) 

// make query from params
app.get('/query/:q', (req, res)=>{

    let query = req.params.q;

    database.query(query, (err, result)=>{
        if (err) throw err;
        res.send(result)
    })

})


// insert into table    ADD ROW TO TABLE
app.get('/addpost',(req, res)=>{

    let new_post = { title : 'post two', body : 'This is a post number two' };
    let new_post2 = { title : 'post one', body : 'This is a post number one' };
    let sql_query = 'INSERT INTO posts SET ?';

    database.query(sql_query, new_post, (err,result)=>{

        if (err) throw err; 
        console.log('new post added')
    })
})


// get ROWs from the Table
app.get('/getposts',(req, res)=>{

    let sql_query = 'SELECT * FROM posts';

    database.query(sql_query, (err,result)=>{

        if (err) throw err;
        console.log('Posts fetched...')
        res.send(result)
    })
})

// get ROWs from the Table by ID num
app.get('/getpost/:id',(req, res)=>{

    let sql_query = 'SELECT * FROM posts WHERE id = ' + req.params.id;
    database.query(sql_query, (err,result)=>{

        if (err) throw err;
        console.log('Post number '+req.params.id+' are fetched...');
        res.send(result);
    })
}) 

// updating rows from the table by ID
app.get('/updatepost/:id',(req, res)=>{
    let newTitle = '"Updated title"';
    let sql_query = 'UPDATE posts SET title = ' + newTitle + ' WHERE id = ' + req.params.id;
    database.query(sql_query, (err,result)=>{

        if (err) throw err;
        console.log('Post number '+req.params.id+' are updated...');
        res.send(result);
    })
})

// drop table
app.get('/deletetable',(req, res)=>{

    let sql = 'DROP TABLE posts'  
    database.query(sql, (err,result)=>{

        if (err) throw err;
        res.send('table are deleted')
    })
})

// delete row
app.get('/deletepost/:id',(req, res)=>{

    let sql = 'DELETE FROM posts WHERE id = ' + req.params.id;
    database.query(sql, (err,result)=>{

        if (err) throw err;
        res.send('post are deleted')
    })
})
 

app.listen('3006',()=>{

    console.log('listining on 3006');
})  