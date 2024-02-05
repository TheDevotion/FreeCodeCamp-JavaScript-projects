// getting all elements:
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const str = textInput.value;

// function to reverse the string:
function reverseString(str) {
  return Array.from(this.str).reverse().join("");
}

// function to check if given string is palindrome or not.
function isPalindrome(str) {
  if (str === reverseString(this.str)) {
    return true;
  }
  return false;
}

checkButton.addEventListener("click", (str) => {
  console.log(this.str);
  if (isPalindrome(str)) {
    console.log(`${str} is palindrome`);
  } else {
    console.log(`${str} is NOT a palindrome`);
  }
});
