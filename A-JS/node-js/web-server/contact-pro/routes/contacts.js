const express = require('express')
const router = express.Router()
const { check , validationResult} = require('express-validator')
const Contact = require('../models/Contact')
const auth = require('../middleware/auth')



router.get('/', auth, async (req ,res) => {

try {
    const contacts = await Contact.find({userID: req.user.id}).sort({ date: -1}) 
    res.json({contacts})
}
catch (error){
    console.log(error.message)
    res.status(500).send('Server Error') 
}
})



router.post('/', [ auth, [
        check('name', 'Name is require').not().isEmpty()
    ]
] , async( req, res ) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    const {name, email, phone, type} = req.body

        try {
            const newContacts = await new Contact({
                name,
                email,
                phone,
                type,
                userID : req.user.id
            })
            const contact = await newContacts.save()
            res.json(contact)

            } catch (error) {

                console.log(error.message)
                res.status(500).send('Server Error')
            }
})



router.put('/:id', auth, async (req ,res) => {

    const {name, email, phone, type} = req.body
    

    //build contact Object
    const contactField = {}
    if (name) contactField.name = name
    if (email) contactField.email = email
    if (phone) contactField.phone = phone
    if (type) contactField.type = type

    try {
        let contact = await Contact.findById(req.params.id)

            if (!contact) res.status(404).json({errorMsg:'Contact not found'})
            //make sure user ohns the contact
            if(contact.userID.toString() !== req.user.id) res.status(401).json({errorMsg:'Not authorized'})

            contact = await Contact.findByIdAndUpdate(req.params.id, 
                { $set : contactField},
                {new: true}
            )
            res.send(contact)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
    

});




router.delete('/:id', auth, async (req ,res) => {

    try {
        let contact = await Contact.findById(req.params.id)
        if(!contact) return res.status(404).json({errorMsg:'Contact not found'})
        //make sure user ohns the contact
        if(contact.userID.toString() !== req.user.id) return res.status(401).json({errorMsg:'not Authorized'})
        await Contact.findByIdAndRemove(req.params.id)
        res.json({errorMsg:'Contact removed'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }

});



module.exports = router