function SumofSubarray(N,K,arr){
  let sum = 0;
  let high = 0;
  for(let i=0;i<N;i++)
  {
      while(sum < K && high < N)
      {
          sum += arr[high];
          high++;
      }
      if(sum == K)
      {
          return "Yes";
      }
      sum -= arr[i]
  }
  return "No";
}


function runProgram(input) {
  input = input.trim().split("\n")
  let tc = +input[0];
  let line = 1;
  for(let i=0;i<tc;i++)
  {
    let [N,K] = input[line].trim().split(" ").map(Number)
    line++;
    let arr = input[line].trim().split(" ").map(Number)
    line++;
    console.log(SumofSubarray(N,K,arr))
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