const logger = (req,res,next) => {
    console.log(`${req.method} Request Recieved`);
    next();
};
 
module.exports=logger;

