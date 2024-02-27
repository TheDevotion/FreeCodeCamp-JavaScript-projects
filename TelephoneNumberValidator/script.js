//getting all the elements:

const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

// getting the value only when we click the button.
checkBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input.length === 0) {
    alert("Please provide a phone number");
  } else {
    // declaring all the regex necessary.
    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const dash = "[\\s\\-]?";
    const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";

    // final regex.
    const phoneRegex = new RegExp(
      `${countryCode}${areaCode}${dash}${phoneNumber}`
    );

    // creating an element to display the result.
    const resultsText = document.createElement("p");
    resultsText.className = "results-text";

    // appending the element.
    resultsText.appendChild(
      document.createTextNode(
        `${phoneRegex.test(input) ? "Valid" : "Invalid"} US number: ${input}`
      )
    );
    result.appendChild(resultsText);
  }
});

clearBtn.addEventListener("click", () => {
  result.textContent = "";
});
