function runProgram(input){
    input = input.trim().split('\n');
    let N = +input[0];
    let temp = [];
    let line = 1;
    for(let i=0; i<N; i++)
    {
        let m = input[line].trim().split(' ').map(Number);
        let a = m[0];
        let b = m[1]
        line++;
        
    if(a === 1)
    {
        temp.push(b);
    }
    else if(a === 2)
    {
        temp.pop();
    }
    else
    {
        if(temp.length === 0)
        {
            console.log("Empty!");
        }
        else
        {
            console.log(temp[temp.length-1]);
        }
    }
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