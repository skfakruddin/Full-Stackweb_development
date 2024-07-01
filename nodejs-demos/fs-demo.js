const fs=require('fs')
//read file content asynchronously
fs.readFile('./sample.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
    console.log(data.toString())
    }
})
console.log("outside the function")
//write new content to file

fs.appendFile('./sample.txt','new information',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file updated")
    }
})