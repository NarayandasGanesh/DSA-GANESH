function MasaiRestaurant(n,input){
    let line=1;
    let S=[];
    for(let i=0;i<n;i++){
    let temp=input[line++].trim().split(" ").map(Number);
    if(temp[0]==1){
        if(S.length==0){
            console.log("No Food");
        }else{
            let x=S.pop();
            console.log(x);
        }
    }else{
        let price=temp[1];
        S.push(price);
    }
    }
}
function runProgram(input) {
    // write your code here
    input=input.trim().split("\n");
    let n=+input[0];
    MasaiRestaurant(n,input);
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