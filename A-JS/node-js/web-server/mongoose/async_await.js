const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewParser: true});

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});


// a class method for log messaging
productSchema.methods.logMessage = function () {
    let msg = `The product ${this.name} with the price ${this.price} has been inserted`;
    console.log(msg);
};
let Product = mongoose.model('Product', productSchema);
let samsung = new Product({ name: 'Samsung Galaxy One', price: 399.99});

console.log(samsung.name);
console.log(samsung.price);let apple = new Product({ name: 'iPhone X', price: 4990.99});
console.log(apple.name); 
console.log(apple.price);let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    // we're connected!
    console.log("we're connected!");    // save samsung here

    try{
        const product = new Product(samsung)
        await product.save()
        await console.log('saved')
        
        const found_products = await Product.find()
        await console.log(JSON.stringify(found_products, null, 4))
        await console.log('found!')

    }
    catch(e){
        console.log(eval)
    }
    
    // find all samsung phones
    



});