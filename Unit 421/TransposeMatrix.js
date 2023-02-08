function transposeTheMatrix(N, M, matrix){
    //write code here
     for(i=0;i<M;i++){
        let bag="";
        for(j=0;j<N;j++){
            bag=bag+matrix[j][i]+" ";
        }
         console.log(bag);
    } 
}
