// need to install node_module  => npm install node_module



// import the module
var express = require('express');

// init the app  
var app = express();



// additional headers for CORS

// app.use(function(req, res, next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-Width, Content-Type, Accept');
//     next();
// });



//define routes
app.get('/',function(request,result){

    result.send('hello world');

});


app.get('/state',function(request,result){

    var state = {'state':'Hamburg', 'capital':'12345'};
    result.send(state);
});

app.get('/states',function(request,result){

    var states = [  {'state':'Hamburg', 'capital':'12345'},
                    {'state':'Hamburg', 'capital':'12345'}
                 ];
    result.send(states);
});


//
app.listen(5000, function(){ 
    console.log('example app started');
});

