function spirallyTraversingAMatrix(N, matrix){
    //write code here
    let arr =matrix
    let top =0,bottom=N-1,left=0,right=N-1;
    
    let temp ='';
    while(top<bottom && left<right){
        for(let i=left; i<=right; i++){
            temp+=arr[top][i]+" "
        }
        top++
        for(let j=top; j<=bottom; j++){
            temp+=arr[j][right]+" "
        }
        right--;
        for(let k=right; k>=left; k--){
            temp+=arr[bottom][k]+" "
        }
        bottom--;
        for(let l=bottom; l>=top; l--){
            temp+=arr[l][left]+" "
        }
        left++;
    }
    console.log(temp)
  
}
