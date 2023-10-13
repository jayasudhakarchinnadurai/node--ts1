const express=require("express")
const fs=require("fs")
const path=require("path")
const Server=express();
const dirpath=path.join(__dirname, 'timestamp')
Server.get("/", (req, res)=>{

    let time=new Date()
    let dateString= time.toUTCString().slice(0, -4)
    let content= dateString 
    fs.writeFileSync(`${dirpath}/time.txt`, content ,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("write sucessfully")
    }
    } )
res.sendFile(path.join(__dirname, "timestamp/time.txt" ))
})
Server.listen(3000, ()=>console.log("local server start 3000"))