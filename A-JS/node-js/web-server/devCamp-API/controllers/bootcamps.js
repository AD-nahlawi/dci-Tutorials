const bootcamp = require('../model/Bootcamp');


exports.getBootcamps = async (req, res, next) => {
  await bootcamp.find({}).then((data)=>{
      res.status(200).json({success : true , msg: 'GET all bootcamps', data:data})

  })
}
exports.getBootcampById = (req, res, next) => {
    res.status(200).json({
        success : true , 
        msg: `GET bootcamp by ID:  ${req.params.id}`,
        hostinfo:req.hostInfo
    })
}

exports.postBootcamps = async (req, res, next) => {  // POST
    console.log(req.body)

    
    await bootcamp.create(req.body).then((data) =>{
        res.status(200).json({success : true , msg: 'POST new bootcamps', data:data})

    })

}


exports.putBootcampById = (req, res, next) => {
    res.status(200).json({success : true , msg: `PUT bootcamps ${req.params.id}`})
}

exports.deletetBootcampById = (req, res, next) => {
    res.status(200).json({success : true , msg: `DELETE bootcamps ${req.params.id}`})
}