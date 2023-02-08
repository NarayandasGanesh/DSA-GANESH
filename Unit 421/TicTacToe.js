function ticTacToe(matrix){
    //write code here
    let winner = 0;
    let loser = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] === "o"){
                winner++;
            }
            if(matrix[i][j] === "x"){
                loser++;
            }
        }
    }
    if(winner > loser){
        console.log("o")
    }else if (winner < loser){
        console.log("x")
    }else{
        console.log("Tie")
    }
  
}
