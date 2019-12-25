const express =require('express');
const router = express.Router();

const low = require('lowdb')
const fileSync = require('lowdb/adapters/FileSync')

const adapter = new fileSync('posts.json')
const db = low(adapter)



// router.get('/', function(req, res, next){

//       res.json(db.get('myPosts'));
     
//       next();
// });

// router.post('/', function(req, res, next){

// })






// router.get('/:id', (req, res)=>{

//     //res.json( posts.id = req.params.id );

//     // let filteredPosts = posts.filter(( item )=>{
//     //     if(item.id == req.params.id){ // = assgn values   ,  == compaire just vaues,   === compaire values and type   
//     //          return true
//     //     }
//     //     else{
//     //         return false
//     //     }
//     // });

//     // console.log(filteredPosts)
//     // console.log(filteredPosts.length)

//     // if(filteredPosts.length > 0){
//     //     res.json(filteredPosts)
//     // }else{
//     //     res.status(400).json({"message":"not found"})
//     // }

//    const found = posts.some( item => item.id == parseInt( req.params.id ))
//    if(found){
//        res.json( 
//            {
//            "massage" : "Massage added",
//            "Posts"   : posts.filter( ( item ) =>{
               
//                         item.id === parseInt(req.params.id);
//                      }) 
//         }
//         )  
//    }else{
//        res.status(400).json({"message":"not founds"})
//    }


// });

// create post   POST
router.post('/',( req, res, next )=> {
    //res.send(req.body);
    const newPost = {
         
        id : Math.random() * 10,
        name:req.body.name,
        email:req.body.email,
        body:req.body.body
    };
     if(!newPost.name || !newPost.email || !newPost.body){
         return res.status(400).json({ msg : 'Please include a name and email'})
     }
     db.get('myPosts').push(newPost).write();
     res.status(200).json(db.get('myPosts'));
     next();
})





// upadate a post   PUT
router.put('/:id',(req,res)=>{


let id = parseInt(req.params.id);

     let find = db.get('myPosts').find({id:id}).assign( req.body ).write();
     res.status(200).json(db.get('myPosts'));
     console.log(req.body)


//     const found = members.some((item) => item.id === parseInt( req.params.id)); // return true!!
//     if(found){
//         const updatePost = req.body;
        
//         members.forEach( (post) => {
//             if(post.id === parseInt( req.params.id ) ) {
//                 post.name = updatePost.name;
//                 post.email = updatePost.email;
//                 post.body = updatePost.body;
//                 res.json({ msg : 'Member updated' ,member })            
//                }
//             })
//     }
//     else{
//         res.status(400).send({ msg : ` No member with the id of ${req.params.id} `  });
//     }
});




router.delete('/:id',(req,res)=>{

     let id = parseInt(req.params.id);
     db.get('myPosts').remove({id: id }).write()
     res.status(200).json(db.get('myPosts'));


//     const found = members.some(item => item.id ==req.params.id);
//     console.log(typeof req.params.id); 

//     if(found){
//         res.json({
//             msg : 'Member deleted',
//             members: members.filter((member)=>{
//                 if(member.id != req.params.id){

//                     return member;
//                 }            
//             })
//         })
//     }
//     else{

//         res.status(400).json({ msg: `Ǹo Member with the id of ${req.params.id}`})
//     }
})


module.exports = router;