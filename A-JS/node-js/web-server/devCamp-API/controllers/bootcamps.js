const Bootcamp = require('../model/Bootcamp');


exports.getBootcamps = async (req, res, next) => {
  await Bootcamp.find({}).then((data)=>{
        res.status(200).json({
            success : true , 
            msg: 'GET all bootcamps', 
            data:data
        })

  })
}
exports.getBootcampById = async (req, res, next) => {
    try{
        await Bootcamp.findById(req.params.id).then((data)  => {
            res.status(200).json({
                success : true , 
                msg: `success Founded :)  ${req.params.id}`,
                //hostinfo:req.hostInfo
                data: data
            })

        }) 
    }catch(err){
        res.status(400).json({
            success : false , msg: `Cannot GET ID:  ${req.params.id}`, error: err
        })
    }

}

exports.postBootcamps = async (req, res, next) => {  // POST
    try{
        await  Bootcamp.create(req.body)
        const findAllBootcamps = await Bootcamp.find({})
        
        res.status(200).json({success : true , msg: 'new PORT is Success completed', data: findAllBootcamps})

    }catch(e){
         res.status(400).json({success : false , msg: e})
    }
}

 

exports.putBootcampById = async (req, res, next) => {

    try{
        var data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({success : true , msg: ` ID: ${req.params.id}, Data is updated :) `,updatedData: data})


    }catch(err){
        res.status(400).json({success : false , msg: ` ID: ${req.params.id}, Data is not updated :(`, error: err})

    }


}

exports.deletetBootcampById = (req, res, next) => {
    res.status(200).json({success : true , msg: `DELETE bootcamps ${req.params.id}`})
}