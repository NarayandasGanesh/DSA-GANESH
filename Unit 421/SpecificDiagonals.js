function specificDiagonals(R, C, matrix, K){
    //write code here
    let rows = 0; cols = 0;
    let leftDia = ""; rightDia = "";
    let ro = matrix.length;
    let co = matrix[0].length;
    for(let f=0; f<ro; f++){
        for(let s=0; s<co; s++){
            if(matrix[f][s] == K){
                rows = f;
                cols = s;
            }
        }
    }
    let sub = rows - cols;
    let sum = rows + cols;
    for(let f=0; f<ro; f++){
        for(let s=0; s<co; s++){
            if(f+s == sum){
                rightDia = rightDia + matrix[f][s] + " ";
            } if(f-s == sub){
                leftDia = leftDia + matrix[f][s] + " ";
            }
        }
    }
    console.log(leftDia);
    console.log(rightDia);
  
}
