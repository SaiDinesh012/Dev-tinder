const mongoose=require('mongoose');

const connectDb= async()=>{
    await mongoose.connect("mongodb+srv://dinesh:dinesh@cluster0.bj9gdng.mongodb.net/devTinder?retryWrites=true&w=majority&appName=Cluster0"
    );
     console.log("Connected to DB:", mongoose.connection.name);
};

module.exports=connectDb;
