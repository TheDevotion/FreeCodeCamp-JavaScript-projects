const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// function to take value when convert  button clicked.

convertBtn.addEventListener("click", () => {
  const stringInput = String(getValidInput());
  const inputStringArr = Array.from(stringInput);
});

const getValidInput = () => {
  const numInput = parseInt(input.value);
  // including some cheks before geting the value.
  if (!numInput && numInput !== 0) {
    output.innerHTML = "<p>Please enter a valid number</p>";
    output.classList.add("orange-bg");
  } else if (numInput <= 0) {
    output.innerHTML =
      "<p>Please enter a number greater than or equal to 1</p>";
    output.classList.add("orange-bg");
  } else if (numInput > 3999) {
    output.innerHTML =
      "<p>Please enter a number less than or equal to 3999</p>";
    output.classList.add("orange-bg");
  } else {
    return numInput;
  }
};
