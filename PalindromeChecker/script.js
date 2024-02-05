// copy of: https://palindrome-checker.freecodecamp.rocks/

const checkButton = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const str = new String(textInput.value);

const revStr = str.split().reverse().join();

checkButton.addEventListener("click", (str) => {
  if (str === null) {
    alert("Please Input a value");
  } else {
    if (str == revStr) {
      alert("is palindrome");
    } else {
      alert("not palindrome");
    }
  }
});
