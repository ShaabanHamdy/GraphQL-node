import  mongoose from'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var noteSchema = new mongoose.Schema({
    title: String ,
    description: String ,
});

//Export the model
const noteModel = mongoose.model('Note', noteSchema);

export default noteModel