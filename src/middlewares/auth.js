

const authMiddleware =(req,res,next)=>{
   const auth="xyz";
   const isUser=auth==="xyz";
   if(isUser){
    next();
   }else{
    res.status(401).send("Unauthorized user");
   }
};


module.exports={
    authMiddleware
}