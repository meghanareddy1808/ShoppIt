import mongoose from 'mongoose';


export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.frsgzqn.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("db connected");

    }catch(error){
        console.log('Error while connecting is',error.message
    )
    }


}
export default Connection;