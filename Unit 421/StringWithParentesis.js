function stringsWithParenthesis (N){
    let stack = [];

    for (let i = 0; i < N.length; i++){
    let left = N[i] === "(" || N[i] === "{" || N[i] === "[";
    let right = N[i] === ")" || N[i] === "}" || N[i] === "]";
 

    if (right && stack.length === 0){return "unbalanced"}

    if (left){
        stack.push(N[i]);
    } 

    if (right){
        let last = stack[stack.length - 1];
        if (N[i] === ")" && last != "("){
            return "unbalanced";
        } else if (N[i] === "}" && last != "{"){
            return "unbalanced";
        } else if (N[i] === "]" && last != "["){
            return "unbalanced";
        } else {
            stack.pop();
        }
    }
}
    if (stack.length > 0){
        return "unbalanced";
    }
    return "balanced";
    }



function runProgram(input){
   console.log(stringsWithParenthesis(input));
}
if (process.env.USERNAME === "") {
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