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
// console.log("Starting the server...");
// const express = require("express");
// const app = express();

// app.get("/health-checkup", (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (!(username === "mehak" && password === "pass")) {
//         return res.status(401).json({ "msg": "Invalid username or password." });
//     }

    

//     if (kidneyId === '1' || kidneyId === '2') {
//         return res.status(200).json({ "msg": "Your Kidney is fine!" });
//     } else {
//         return res.status(400).json({ "msg": "Invalid kidneyId." });
//     }
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// //what if i tell you to introduce another route that does kidney replacement . Inputs need to be same.
// //ugly solution here would be to create a new route and repeat code;
// const express=require("express");
// const app = express();

// app.get("/health-checkup",function(req,res){
//     const kidneyId=req.query.kidneyId;
//     const username=req.headers.username;
//     const password=req.headers.password;

//     if(username!="mehak" && password!="pass"){
//         res.status(403).json({
//             msg:"User doesn't exist",
//         });
//         return;
//     }

//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(411).json({
//             msg:"wrong inputs",
//         });
//         return;
//     }
//     res.send("Your heart is healthy.");
// });
// app.put("/health-checkup",function(req,res){
//     const kidneyId=req.query.kidneyId;
//     const username=req.headers.username;
//     const password=req.headers.password;

//     if(username!="mehak" && password!="pass"){
//         res.status(403).json({
//             msg:"User doesn't exist",
//         });
//         return;
//     }

//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(411).json({
//             msg:"wrong inputs",
//         });
//         return;
//     }
//     res.send("Your heart is healthy.");
// });



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
app.get("/kidney-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("your kidney is healthy");
})
app.get("/heart-checkup",userMiddleware,function(req,res){
    res.send("Your heart is healthy");
})