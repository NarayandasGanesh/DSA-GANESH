function ReduceString(str){
    let emptystack = [];
    for(let i=0; i<str.length; i++){
        if(emptystack.length===0){
            emptystack.push(str[i])
        }else{
            if(emptystack[emptystack.length-1]==str[i]){
                emptystack.pop()
            }else{
                emptystack.push(str[i])
            }
        }
    }
    if(emptystack.length===0){
        console.log("Empty String")
    }else{
        console.log(emptystack.join(""))
    }
}


function runProgram(input) {
     // write your code here
     let str = input
     ReduceString(str)
  }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }