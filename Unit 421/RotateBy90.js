function rotateBy90(R, matrix){
    //write code here
      for(i = R-1; i >= 0; i--){
            let temp="";
            for(j = 0; j < R; j++){
                temp = temp + matrix[j][i] + " ";
            }
             console.log(temp);
        } 
}
