// getting all elements:
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", displayResult);

// function to reverse the clean string:
function reverseString(cleanString) {
  return Array.from(cleanString).reverse().join("");
}
// function to check if given string is palindrome or not.
function isPalindrome(str) {
  const cleanString = getCleanString(str);

  console.log(cleanString);

  const revString = reverseString(cleanString);
  console.log(revString);

  if (cleanString === revString) {
    return true;
  }
  return false;
}

// apending the result.

function displayResult() {
  const str = textInput.value; // get the value after the button is clicked..
  if (str.length === 0) {
    alert("Please input a value");
  }
  if (isPalindrome(str)) {
    result.innerHTML = `${str} is a palindrome`;
  } else {
    result.innerHTML = `${str} is not a palindrome`;
  }
}

// function to clean the string from spaces, underscore and numbers.
// also removing , and .
// also converting it to lowercase.

function getCleanString(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
}

// /[^a-zA-Z0-9]+/g: This regular expression pattern matches any
//sequence of characters that are not letters or digits. The ^ inside
// the square brackets [^...] negates the character set,
// meaning it matches any character that is not within the specified range.
//The + quantifier matches one or more occurrences of the characters.
// The g flag at the end indicates that the replacement
//should be done globally, i.e., for all occurrences in the string.
