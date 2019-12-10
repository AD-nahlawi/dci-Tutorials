const express =require('express');
router = express.Router();
const posts = require('../../posts');




router.get('/',(req, res) => {
    res.json(posts);
})

router.get('/:id',(req, res)=>{
    //res.json( posts.id = req.params.id );

    // let filteredPosts = posts.filter(( item )=>{
    //     if(item.id == req.params.id){ // = assgn values   ,  == compaire just vaues,   === compaire values and type   
    //          return true
    //     }
    //     else{
    //         return false
    //     }
    // });

    // console.log(filteredPosts)
    // console.log(filteredPosts.length)

    // if(filteredPosts.length > 0){
    //     res.json(filteredPosts)
    // }else{
    //     res.status(400).json({"message":"not found"})
    // }

   const found = posts.some( item => item.id == parseInt( req.params.id ))
   if(found){
       res.json( 
           {
           "massage" : "Massage added",
           "Posts"   : posts.filter( ( item ) =>{
               
                        item.id === parseInt(req.params.id);
                     }) 
        }
        )  
   }else{
       res.status(400).json({"message":"not founds"})
   }


});




// create member   POST
router.post('/',( req, res )=> {
    //res.send(req.body);
    const newMmber ={
        id :uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:req.body.status
    };
    //res.send(newMmber);
    if(!newMmber.name || !newMmber.email){
        return res.status(400).json({ msg : 'Please include a name and email'})
    }
    members.push(newMmber);
    res.json(members);
})





// upadate a member   PUT
router.put('/:id',(req,res)=>{

    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach( member=>{
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name;
                member.email= updMember.email;
                member.status= updMember.status;
                res.json({ msg : 'Member updated' ,member })            }
            })
    }
    else{
        res.status(400).send({ msg : ` No member with the id of ${req.params.id} `  });
    }

});




router.delete('/:id',(req,res)=>{

    const found = members.some(item => item.id ==req.params.id);
    console.log(typeof req.params.id); 

    if(found){
        res.json({
            msg : 'Member deleted',
            members: members.filter((member)=>{
                if(member.id != req.params.id){

                    return member;
                }            
            })
        })
    }
    else{

        res.status(400).json({ msg: `Ǹo Member with the id of ${req.params.id}`})
    }
})
module.exports = router;