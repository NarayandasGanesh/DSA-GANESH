function NearestSmallerElement(n,arr){
    let left = leftside(n,arr);
    let right = rightside(n,arr);

    let res = [];
    for(let i=0;i<n;i++){
    if(left[i]==-1 && right[i]==-1){
        res[i]=-1;
    }else if(left[i]==-1){
        res[i]=arr[right[i]];
    }else if(right[i]==-1){
        res[i]=arr[left[i]];
    }else{
        let a=Math.abs(i-left[i]);
        let b=Math.abs(i-right[i]);
        if(a>b){ 
            res[i]=arr[right[i]];
        }else{
            res[i]=arr[left[i]];
    
        }
    }
 }
    console.log(res.join(" "));
}
function leftside(n,arr){
    let stack = [];
    let result = [];
    for(let i=0;i<n;i++){
        while(stack.length!==0 && arr[stack[stack.length-1]]>=arr[i]){
            stack.pop();
        }
        
        result[i]=stack.length===0?-1:stack[stack.length-1];
        stack.push(i);
    }
    return result;
}
function rightside(n,arr){
    let stack2 = [];
    let result2 = [];
    for(let i=n-1;i>=0;i--){
        while(stack2.length!==0 && arr[stack2[stack2.length-1]]>=arr[i]){
            stack2.pop();
        }
        result2[i]=stack2.length===0?-1:stack2[stack2.length-1];
        stack2.push(i);
    }return result2;
}

function runProgram(input){
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0;i<tc;i++){
        let n=+input[l++];
        let arr=input[l++].trim().split(" ").map(Number);
        NearestSmallerElement(n,arr);
    }
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