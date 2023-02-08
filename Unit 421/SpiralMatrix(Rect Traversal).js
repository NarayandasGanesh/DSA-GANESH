function spiralTraversal(N, M, arr){
    //write code here
    let t=0;
  let l=0;
  let bottom=N-1;
  let right=M-1;
  let sum="";
  let count=0;
  
  while(count<N*M)
  {
  for(let i=t;i<=bottom && count<N*M; i++)
  {
      sum+=(arr[i][l])+" ";
      count++;
  }
  l++;
  for(let i=l;i<=right && count<N*M;i++)
  {
      sum+=(arr[bottom][i])+" ";
      count++;
  }
  bottom--;
  for(let i=bottom;i>=t && count<N*M;i--)
  {
      sum+=(arr[i][right])+" ";
      count++;
  }
  right--;
  for(let i=right;i>=l && count<N*M;i--)
  {
      sum+=(arr[t][i])+" ";
      count++;
  }
  t++;
  }console.log(sum);

  
}
