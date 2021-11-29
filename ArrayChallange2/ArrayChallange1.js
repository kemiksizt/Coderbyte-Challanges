function ArrayChallenge(strArr) { 

  let wordToCompare = strArr[0];

  let stringDictionary = strArr[1];

  let singleStrings = stringDictionary.split(',');


  let answerWords = "";

  singleStrings.map((firstWord) => {

    let splitMainWordArray = wordToCompare.split(firstWord)

    if(splitMainWordArray.length > 0){
      splitMainWordArray.map((word) => {

        let joinedWord = firstWord + word
        let reverseWord = [joinedWord].reverse().toString

        if(joinedWord === wordToCompare || reverseWord === wordToCompare){

          answerWords = "" + firstWord + "," + word + ""

        }
        else{
          return "Not Possible";
        }
        
      })
    }
  })

  return answerWords;

}