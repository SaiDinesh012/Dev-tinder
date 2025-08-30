const express = require('express');
const app = express();


const {authMiddleware}=require("./middlewares/auth");
// app.use("/user",myauth)
// const auth = require('./middlewares/auth');



 app.get("/user/data",authMiddleware,(req, res) => {
   console.log("Iam authenticated user");
   res.send({name:"dinesh",age:"30"})
});


app.listen(3000, () => {
    console.log("I am listening at 3000");
});
