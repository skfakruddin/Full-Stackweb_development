async function getPosts2(){
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await res.json();
    console.table(data);
    
    }
    catch(err){
    console.log(err);
    }
    }
    getPosts2();