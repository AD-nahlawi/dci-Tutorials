
const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{

    const token = req.header('x-auth-token');

    if(!token){
        return res.status(400).json({ msg:'No token, authorization denied..!'});

    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode.user
        next()
        
    } catch (error) {
        return res.status(400).json({ msg:'token is not valid'});
        
    }
}