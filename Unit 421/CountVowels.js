function Count_vowels(N, M, mat){
    let count = 0;
    let temp = [];
    
    if(N - M === M - 1)
    {
        j = M - 1;
        for(let i = 0; i < Math.floor(N/2); i++)
        {
            temp.push(mat[i][j]);
            j--;
        }
        
        j = 0;
        for(let i = Math.floor(N/2); i < N; i++)
        {
            temp.push(mat[i][j]);
            j++;
        }
        for(let i = 0; i < temp.length; i++)
        {
            if(temp[i] === "a" || temp[i] === "e" || temp[i] === "i" || temp[i] === "o" || temp[i] === "u")
            {
                count ++;
            }
        }
        console.log(count);
    }
    else
    {
        console.log(-1);
    }
    
}

function runProgram(input){
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    
    for(let i = 0; i < tc; i++){
        let res = input[line++].trim().split(" ").map(Number);
        let N = res[0];
        let M = res[1];
        
        let mat = [];
        for(let j=0; j<N; j++)
        {
            mat.push(input[line++].trim().split(" "))
        }
        Count_vowels(N, M, mat);
    }
}
if(process.env.USER===""){
runProgram('');
}else{
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read="";
process.stdin.on("data",function(input){
read+=input;
});
process.stdin.on("end",function(){
read=read.replace(/\n$/,"");
read=read.replace(/\n$/,'');
runProgram(read);
});
process.on('SIGINT',function(){
read=read.replace(/\n$/,"");
runProgram(read);
process.exit(0);
});
}