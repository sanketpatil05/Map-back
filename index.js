
const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
const { userRoute } = require("./route/user.route");
const City = require("./model/city.model");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

 app.use("/user", userRoute);
 
 app.get("/city", async(req, res)=>{
 
  const cities  =await City.find();

  res.send(cities);


 }) 

 app.get("/city/:id",async(req,res)=>{

  const _id=req.params.id;
  
  const city=await City.findOne({_id})

  res.send(city);

 })
 

app.listen(5000, async() => {
    try {
        await connection;
        console.log("connection done");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on 5000");
});


