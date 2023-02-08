function goInZigZag(N, M, matrix){
    //write code here
    let temp="";
    for( let i=0; i<N; i++){
        if(i%2===0){
            for(j=M-1; j>=0; j--){
                temp=temp+matrix[i][j]+" ";
            }
                }else{
                    for(k=0; k<M; k++){
                        temp=temp+matrix[i][k]+" "
                    }
        }
    }
     console.log(temp)
}
