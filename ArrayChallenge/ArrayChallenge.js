function ArrayChallenge(arr) { 

  let max = arr[0];
  let sum = 0;

  // Max
  for(let i = 1; i < arr.length; i++){

    if(max < arr[i]){
      max = arr[i];
    }
  }
// Array without max value
const index = arr.indexOf(max);
arr.splice(index,1);

arr.sort(function(a,b){return a-b})


for(let i = 0; i < arr.length; i++){
  sum += arr[i];
  for(let j = 0; j < arr.length; j++){
    if(i != j){
      sum += arr[j];
      if(sum == max){
        return true;
      }
    }
  }

  for(let k = 0; k < arr.length; k++){
    if(i != k){
      sum -= arr[k];
      if(sum == max){
        return true;
      }
    }
  }

  sum = 0;


}


return false;



}