import  mongoose from'mongoose';


// Connect MongoDB at default port 27017.
const ConnectionDB =async ()=>{
   return await  mongoose.connect(process.env.CONNECTION_DB)
   // return await  mongoose.connect('mongodb://0.0.0.0:27017/GraphQl')
   .then((res)=> console.log("Connection is Running....."))
   .catch((err)=> console.log({message:"Connection is fail" , err}))
}


export default ConnectionDB