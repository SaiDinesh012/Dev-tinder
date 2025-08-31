const express = require('express');
const { connect } = require('mongoose');
const app = express();
const connectDb=require('./config/database');
const userModel=require('./models/User');


app.post('/signup', async (req,res)=>{


    try{
    const user1=new userModel({
        firstName:"dinesh",
        lastName:"kumar",
        age:"25",
        email:"dinesh.booloju@gmail.com"
    })

   const result= await user1.save();
    console.log(result);
    res.send("user added sucessfully");

}catch(err){
    res.send("user not added sucessfully");
    console.log(err);
}
    

})

connectDb().then(()=>{
    console.log("Database established sucessfully");
    app.listen(3000, () => {
    console.log("I am listening at 3000");
});
}).catch((err)=>{
    console.log("Error connecting to db");
})



