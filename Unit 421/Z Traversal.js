function zTraversal(N,arr){
    //write code here
    let bag = "";
    for(let i=0; i<arr.length; i++){
        if(i===0 || i===N-1){
            for(let j=0; j<N; j++){
                bag=bag+arr[i][j]+" ";
            }
        }else{
            for(let j=0; j<N; j++){
                if(i+j==arr.length-1){
                    bag=bag+arr[i][j]+ " ";
                }
            }
        }
    }
    console.log(bag);
}
