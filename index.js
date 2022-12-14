function isPalindrome(word){
  if(word.length == 0 || word.length == 1){
      return true;
  }
  if(word.charAt(0) == word.charAt(word.length-1)){
      return isPalindrome(word.substring(1, word.length-1))
  }
  return false
}
console.log(isPalindrome("racecar"))

/* 
  Add your pseudocode here
1. A palindrome reads the same forwards and backwards, therefore the base/exit condition will be if the word has zero or one character. If so return true
2. If word has more than one character check if the letter at the first index and last index are the same. If so discard the two letters checked and call the function again, passing the remaining letters as the new word.
3. If the letters at the first and last index are different, return false to indicate that the word is not a palindrome.
*/

/*
  Add written explanation of your solution here
    Function should take a string argument and check if it's a palindrome. Palindrome reads the same when letters are reversed. If it's a palindrome return true else return false. The recursive function will check if the last letter and first letter are the same, if they are it will discard the two letters and call the function again and pass a new word minus the two letters discarded. If every call returns true, it will continue calling until only one or no letter is remaining then it will return the final true. Should any of the two lettes checked differ it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
