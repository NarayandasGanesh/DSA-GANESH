function cirTraversal(matrix,N) {
    //write code here
        let left = 0;
        let right = N-1;
        let top = 0;
        let bottom = N-1;
        
        let temp="";
        
        for(a = bottom; a >= top; a--){
            temp = temp + matrix[a][left] +" ";
        }//console.log(bag)
        left++;
        for( a = left; a <= right; a++){
            temp = temp + matrix[top][a] +" ";
        }top++;
        for( a = top; a <= bottom; a++){
            temp = temp + matrix[a][right] +" ";
        }//console.log(bag)
        right--;
        for( a = right; a >= left; a--){
            temp = temp + matrix[bottom][a] +" ";
        }
        console.log(temp)
    }
    