function smallestAndLargestOfAll(n, arr){
    //write code here
     let min = Infinity;
    let max = -Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    
    console.log(min)
    console.log(max)
}
