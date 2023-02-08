function MaximumOccurences(N,str){
    let max = -Infinity
    let res;
    let obj = {};
    for(let i = 0; i < N; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++
        }
    }
    // console.log(obj)
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            res = key
        }
    }
    console.log(res)
}

function runProgram(input) {
     // write your code here
     input = input.split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i = 0; i < tc; i++){
         let N = input[line++];
         let str = input[line++]
         MaximumOccurences(N,str)
     }
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