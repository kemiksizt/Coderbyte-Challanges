
function RunLength(str) { 

    let counter = 1;
    let result = "";
  

    // wwwaad

    for(let i = 0; i < str.length; i++){
      
      if(str[i] === str[i+1]){
        counter++;
      }
  
      else{
        result += counter + str[i];
        counter = 1;
      }
  
  
    }
     
    return result; 
  
  }

  ///3w2a1d