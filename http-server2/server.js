// //now learning about app.use()
// //count the no of requests

// const express=require("express");
// const app=express();

// let numberofRequests = 0;
// function calculateRequests(req,res,next){
//     numberofRequests++;
//     console.log(numberofRequests);
//     next();
// }
// app.use(calculateRequests);
// // app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     res.json({
//         msg:"hi there"
//     })
// })
// app.get("/health-checkup2",function(req,res){

// })
// app.listen(3001);

//why is there a need of input validation
//what is user gives wrong input

// const express=require("express");
// const app=express();
// app.use(express.json());

// app.post("health-checkup",function(req,res){
//     //kidneys=[1,2]
//     const kidneys=req.body.kidneys;
//     const kidneyLength=kidneys.length;

//     res.send("you have " + kidneyLength + "kidneys")
// });

// //if there is some wrong input by user then we use something called global catches which is also a middleware
// //global catches

// app.use(function(err,req,res,next){
//     res.json({
//         msg:"Sorry something is up with ur server."
//     })
// })
// app.listen(3001);

//how can you do better input validation? 
//This is very hard to scale What if you expect a complicated input
//if(kidneyId!=1 && kidneyId!=2){return false;}

//we will use zod for input validation

const express=require("express");
const zod=require("zod")
const app=express();

const schema=zod.array(zod.number());

// // {
// //     email:string=>email
// //     password:atleast 8 letters
// //     country: "IN","US"
// // }

// const schema=zod.object({
//     email:zod.string(),
//     password:z.string(),
//     country:z.literal("IN").or(z.literal("US")),
//     kidneys:z.array(z.number())
// })

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
        
    }
    else{
        res.send({
            response
        })
    }
});
app.listen(3001);
