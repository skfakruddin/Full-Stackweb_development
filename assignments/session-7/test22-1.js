  let s="aaaabbababababbbbabababaaaa";
  let ac=0;
    let bc=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="a"){
            ac++;
        }else if(s[i]=="b"){
            bc++;
        }
    }
    console.log("Frequency of a is "+ac);
    console.log("Frequency of b is "+bc);



