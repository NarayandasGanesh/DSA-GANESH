function symmetricOrNot(n, mat) {
    // write code here
  let start = 0;
  let end = n-1;
  let left = 0;
  let right = n-1

  while( start <= end)
  {
      for(let i=0;i<n;i++)
      {
          if(mat[start][i] !== mat[end][i])
          {   
              console.log("NO")
              return;
          }
         
       }
       start++;
       end--;
      
  }

  while(left <= right)
  {
      for(let i=0;i<n;i++)
      {
          if(mat[i][left] !== mat[i][right])
          {
             console.log("NO")
             return ;
          }
          
      }
      
      left++;
      right--;
      
  }
  console.log("YES");
}
