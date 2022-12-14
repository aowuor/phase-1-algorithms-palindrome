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

// function isPalindrome(word) {
//   // Write your algorithm here
//   let arr = [];

  
  
//   let input = word.split("")
//   let reversed = [...input.reverse()]
//   console.log(input)
//   console.log("here " + reversed)
//   arr.push(input)
//   let reversedArr = arr.reverse().join(",")
//   console.log(arr)
//   console.log(reversedArr)

//   return (word === reversedArr) ? "true" : "false"
  
  
// }
// isPalindrome("gain")
/* 
  Add your pseudocode here
  1.Function takes an input and splits the letters then save as array
  2. Reverse the elements of the array then join and save in a variable
  3. If input and new variable are same then return true.
  4. If input and new variable are not same then return false.
*/

/*
  Add written explanation of your solution here
    Function should take a string argument and check if it's a palindrome. Palindrome reads the same when letters are reversed. If it's a palindrome return true else return false.
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
