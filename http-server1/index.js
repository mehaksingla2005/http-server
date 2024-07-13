// const express=require("express");

// const app=express();
// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }return ans;
// }

// app.get('/',function(req,res){
//     let n=req.query.n;
//     let ans=sum(n);
//     res.send("hi your ans is"+ans);
// })

// app.listen(3000,()=>{
//     console.log("app listening on port 3000")
// })

const express=require("express");

const app=express();

//get-user can check how many kidneys they have and their health.
//post-user can add anew kidney
//put-user can replace a kidney,make it healthy
//delete-user can remove a kidney

var users=[{
    name:"Mehak",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
app.use(express.json());
app.get('/',function(req,res){
    const userKidneys=users[0].kidneys;
    const noOfKidneys=userKidneys.length;
    let noOfHealthyKidneys=0;
    for(let i=0;i<userKidneys.length;i++){
        if(userKidneys[i].healthy){
            noOfHealthyKidneys=noOfHealthyKidneys+1;
        }
    }
    const noOfunHealthyKidneys=noOfKidneys-noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfunHealthyKidneys
    })
})
app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})


app.put('/',function(req,res){

   if(isthereAtleastOneUnhealthy()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
       } 
       res.json({
        
       })
   }else{
    res.status(411).json({
        msg:"you have no bad kidneys"
    })
}
})
app.delete('/',function(req,res){
    //you should return a 411
    //only if atleast one unhealthy kidney is there do this,else return 411
   if(isthereAtleastOneUnhealthy()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
       } 
       users[0].kidneys=newKidneys;
       res.json({msg:"done"})
   }else{
    res.status(411).json({
        msg:"you have no bad kidneys"
    })
   }
    
})
function isthereAtleastOneUnhealthy(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true; 
        }
       } 
}

app.listen(3000)

