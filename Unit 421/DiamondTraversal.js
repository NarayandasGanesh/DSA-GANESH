function diamondTraversal(matrix) {
    //Write your code over here
    let a = Math.floor(matrix.length/2);
      let res = "";
      for(let i = matrix[0].length-1; i >= Math.floor(matrix[0].length/2); i--){
          res += matrix[a][i]+" ";
          a--;
      }
      let b = 1; 
      for(let i = Math.floor(matrix[0].length/2)-1; i >= 0; i--){
          res += matrix[b][i]+" ";
          b++;
      }
      let c = Math.floor(matrix.length/2)+1; 
      for(let i = 1; i <= Math.floor(matrix[0].length/2); i++){
          res += matrix[c][i]+" ";
          c++;
      }
      let d = matrix.length-2; 
      for(let i = Math.floor(matrix[0].length/2)+1; i <= matrix[0].length-2; i++){
          res += matrix[d][i]+" ";
          d--;
      }
      console.log(res)
  }
  