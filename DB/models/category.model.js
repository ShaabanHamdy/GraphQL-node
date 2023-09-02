import  mongoose from'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema({
    name: String ,
});

//Export the model
const categoryModel = mongoose.models("Category") || mongoose.model('Category', categorySchema);

export default categoryModel