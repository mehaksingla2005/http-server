// const express=require("express");
// const app=express();
// app.get("/health-checkup",function(req,res){
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;

//     if(username!="mehak" || password!="pass"){
//         res.status(400).json({
//             "msg":"Somethings up with your inputs."
//         })
//         return;
//     }
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(400).json({
//             "msg":"Somethings up with your inputs."
//         })
//         return;
//     }
//     res.json({
//         msg:"Your Kidney is Fine."
//     })
// })
// app.listen(3000);


const express=require("express");
const app=express();

function userMiddleware(req,res,next){
    if(username!="mehak" || password!="pass"){
        res.status(403).json({
            msg:"incorrect inputs",
        });

    }else{
        next();
    }
};
function kidneyMiddleware(req,res,next){
    if(kidneyId !=1 && kidneyId!=2){
        res.status(403).json({
            msg:"incorrect inputs",
        });

    }else{
        next();
    }
};
app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("your heart is healthy");
})