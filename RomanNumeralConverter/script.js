const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// creating an array of object with roman numerals and their arabic counterpart.

const romanSymbolValues = [
  {
    romanSymbol: "M",
    value: 1000,
  },
  {
    romanSymbol: "CM",
    value: 900,
  },
  {
    romanSymbol: "D",
    value: 500,
  },
  {
    romanSymbol: "CD",
    value: 400,
  },
  {
    romanSymbol: "C",
    value: 100,
  },
  {
    romanSymbol: "XC",
    value: 90,
  },
  {
    romanSymbol: "L",
    value: 50,
  },
  {
    romanSymbol: "XL",
    value: 40,
  },
  {
    romanSymbol: "X",
    value: 10,
  },
  {
    romanSymbol: "IX",
    value: 9,
  },
  {
    romanSymbol: "VIII",
    value: 8,
  },
  {
    romanSymbol: "VII",
    value: 7,
  },
  {
    romanSymbol: "VI",
    value: 6,
  },
  {
    romanSymbol: "V",
    value: 5,
  },
  {
    romanSymbol: "IV",
    value: 4,
  },
  {
    romanSymbol: "III",
    value: 3,
  },
  {
    romanSymbol: "II",
    value: 2,
  },
  {
    romanSymbol: "I",
    value: 1,
  },
];

// function to take value when convert  button clicked.
convertBtn.addEventListener("click", () => {
  const numInput = getValidInput();
});

const convertNumToRoman = (num = {
  // romanNumValues.forEach(obj => {
  // });
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
