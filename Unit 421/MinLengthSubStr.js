function minLengthSubstr(s){
    //write code here
         let obj={};
            let min=Infinity;
            let count=0;
        
        for(let i=0;i<s.length;i++){
            if(obj[s[i]]===undefined){
                count++;
                obj[s[i]]=1;
            }
        }
          for(let i=0;i<s.length;i++){
                 let bag="";
            for(let j=i;j<s.length;j++){
              
                bag+=s[j];
                 let count1=0;
            let obj1={};
                 for(let i=0;i<bag.length;i++){
                        if(obj1[bag[i]]===undefined){
                            obj1[bag[i]]=1;
                            count1++;
                         }
                    }
                     if(count===count1)
                     {
                         if(bag.length<min){
                      min=bag.length;  
                    }
                }
            }
        }
            console.log(min);
    }
        
        function max(count){
            let max=-Infinity;
            if(count>max){
                return true;
            }
        }
    