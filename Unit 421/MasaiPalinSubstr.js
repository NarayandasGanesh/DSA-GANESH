function masaiPalSubString(S){
    //write code here
    let maxlength = 0;
    
    for( i = 0; i <= S.length; i++){
        for(let  j = 0; j <= S.length; j++){
            let substr = "";
            for(let k = i; k <= j; k++){
                substr += S[k];
            }
            let substr1 = "";
            for(let x = substr.length-1; x >= 0; x--){
                substr1 += substr[x];
            }
            if(substr === substr1){
                if(substr1.length > maxlength){
                    maxlength = substr1.length;
                }
            }
        }
    }
    console.log(maxlength)
}
