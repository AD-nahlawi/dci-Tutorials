

// function middlewareCors (req, callback){

//      let option={
//           origin : '*'
//      };
     


//      callback(null, option)
// } 

// module.exports = middlewareCors;

function middlewareCors (req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //, Authorization
    res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, POTIONS');

    next();
}

module.exports = middlewareCors;