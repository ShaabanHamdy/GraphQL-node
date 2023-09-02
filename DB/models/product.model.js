import  mongoose from'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: String ,
    description: String ,
});

//Export the model
const productModel = mongoose.model('Product', productSchema);

export default productModel