function RoadToOne(N){
    let count = 0;
    while(N > 1){
        if(N % 2 === 0){
            N = N / 2;
            count++;
        }else if( N % 3 === 0){
            N = (2 * N) / 3;
            count++
        }else if(N % 5 === 0){
            N = (4 * N) / 5;
            count++
        }
        if(N % 2 === 0 || N % 3 === 0 || N % 5 === 0){
            continue;
        }else{
            break;
        }
    }
    if(N === 1){
        console.log(count)
    }else{
        console.log(-1)
    }
}

function runProgram(input) {
     // write your code here
     input = input.trim().split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i = 0; i < tc; i++){
         let N = +input[line++]
         RoadToOne(N)
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