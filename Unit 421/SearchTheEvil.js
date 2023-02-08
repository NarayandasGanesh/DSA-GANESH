function runProgram(input){
    input = input.trim().split("\n")
    let tc =+ input[0];
    let line = 1;
    for(let i = 0; i < tc; i++){
        let x = input[line++].trim().split(" ").map(Number);
        let N = x[0];
        let M = x[1];
        let matrix=[]
        for(let j = 0; j < N; j++){
            let arr = input[line++].trim().split(" ").map(Number);
            matrix.push(arr)
        }
        let K =+ input[line++]
        SearchTheEvil(matrix,N,M,K)
    }
}

function SearchTheEvil(matrix,N,M,K){
    let flag = false
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(matrix[i][j] == K){
                flag = true
            }
        }
    }
    console.log(flag)
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