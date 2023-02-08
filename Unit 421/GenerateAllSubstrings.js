function generateALlSubstr(N,A){
    //write code here
    for(let i = 0; i <= A.length-1; i++){
        for(let j = i; j <= A.length-1; j++){
            let temp = "";
            for(let k = i; k <= j; k++){
                temp += A[k]
            }
            console.log(temp)
        }
    }
   
  }
  