function MissingInteger(arr){
    for(let i = 1; i < arr.length; i++){
        let flag = false;
        for(let j = 0; j < arr.length; j++){
            if( i === arr[j]){
                flag = true;
            }
        }
        if(flag === false){
            console.log(i)
        }
    }
  }
  
  function runProgramm(input){
     input = input.split("\n");
     let arr = input[0].trim().split(" ").map(Number);
     MissingInteger(arr)
  }
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  read="";
  process.stdin.on("data",function(input){
      read+=input;
  });
  process.stdin.on("end",function(){
      read=read.replace(/\n$/,"");
      read=read.replace(/\n$/,"");
      runProgramm(read);
  })