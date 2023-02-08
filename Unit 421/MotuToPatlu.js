function MotuToPatluHouse(N){
    let steps = 0;
    while(N > 5){
        N = N -5
        steps++
    }
    steps = steps + 1;
    console.log(steps)
}

function runProgram(input) {
     // write your code here
     let N = +input;
     MotuToPatluHouse(N)
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