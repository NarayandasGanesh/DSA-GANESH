function SortedArrays(L,arr,arr1){
    let count=0;
    let i=0;
    let j=L-1;
    while(i<L && j>=0){
        if(arr[i]==arr1[j]){
            count++;
            i++;
            j--;
        }
        else if(arr[i]>arr1[j]){
        j--
    }
    else{
        i++
     }
  }
  console.log(count)
    
   
}

function runProgram(input) {
   input=input.split('\n');
 let tc=+input[0];
 let line=1;
  for(let i=0;i<tc;i++)
  {
      let L=+input[line++];
      let arr =input[line++].split(" ").map(Number);
      let arr1 =input[line++].split(" ").map(Number);
      
      SortedArrays(L,arr,arr1)
  }
    
}



if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}