function ediblePlants(N,edible,M,plants){
    // write code here
    let count = 0;
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(edible[i] == plants[j]){
                count++
            }
        }
    }
    console.log(count)
}
