//getting all the elements:

const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", () => {
  if (userInput.value.length === 0) {
    alert("Please provide a phone number");
  } else {
  }
});

clearBtn.addEventListener("click", () => {
  result.textContent = "";
});
