function sumWithoutBorders(N, M, matrix){
    //write code here
      let sum = 0;
      for(let i = 0; i < M; i++){
          for(let j = 0; j < N; j++){
              if(i !== 0 && i !== M-1 && j !== 0 && j !== N-1){
                  sum += matrix[j][i]
              }
          }
      }
      console.log(sum)
  
}
