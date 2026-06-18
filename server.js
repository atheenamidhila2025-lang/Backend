






const express=require("express");

const app=express();

const logger=require(`./middleware/logger`);
const userRoutes= require('./routes/userroutes');


app.use(express.json());
app.use(logger);

app.use('/users',userRoutes);

app.listen(3000, () => {
    console.log('Server Started on  Port 3000');

});


