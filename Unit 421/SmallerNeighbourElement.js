function SmallerNeighbourElement(N,arr){
    let stack = [];
    let res = [];
    for(let i=0; i<N; i++){
        while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }if(stack.length===0){
            res.push(-1)
        }else{
            res.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    console.log(res.join(" "))
}


function runProgram(input) {
     // write your code here
     input = input.split("\n");
     let N = +input[0];
     let arr = input[1].split(" ").map(Number);
     SmallerNeighbourElement(N,arr)
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