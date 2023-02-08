function Happynumber(N){
    let obj = {};
    while(N != 1){
        if(! obj[N])
        obj[N] = 1;
        else{
            console.log("No");
            return;
        }
        N = Squares(N);
    }console.log("Yes");
}
function Squares(Num){
    let x;
    let res = 0;
    while(Num > 0){
        x = Num % 10;
        res += x * x;
        Num = Math.floor(Num/10);
    }
    return res;
}


function takeInput(input){
    input = input.trim().split("\n");
    let tc = +input[0];
    for(let i = 0; i < tc; i++){
       let Num = +input[i+1];
       Happynumber(Num);
    }
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
read="";
process.stdin.on("data",function(input){
    read+=input;
});
process.stdin.on("end",function(){
    read=read.replace(/\n$/,"");
    read=read.replace(/\n$/,"");
    takeInput(read);
})