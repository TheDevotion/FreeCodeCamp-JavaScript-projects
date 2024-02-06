// getting all elements:
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", displayResult);

// function to reverse the string:
function reverseString(str) {
  return Array.from(str).reverse().join("");
}
// function to check if given string is palindrome or not.
function isPalindrome(str) {
  if (str === reverseString(str)) {
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
