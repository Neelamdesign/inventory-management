import mongoose from "mongoose";

const ConnectDB = async()=>{
    try{
    const connec = await mongoose.connect(process.env.MONGODB_URL);
    console.log("localhost connected with database", connec.connection.host)
    }
    catch(err){
        console.log("failed to connect")
        process.exit(1)
    }
}

export default ConnectDB;