const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// creating an array of object with roman numerals and their arabic counterpart.

const romanSymbols = [
  {
    romanSymbol: "M",
    val: 1000,
  },
  {
    romanSymbol: "CM",
    val: 900,
  },
  {
    romanSymbol: "D",
    val: 500,
  },
  {
    romanSymbol: "CD",
    val: 400,
  },
  {
    romanSymbol: "C",
    val: 100,
  },
  {
    romanSymbol: "XC",
    val: 90,
  },
  {
    romanSymbol: "L",
    val: 50,
  },
  {
    romanSymbol: "XL",
    val: 40,
  },
  {
    romanSymbol: "X",
    val: 10,
  },
  {
    romanSymbol: "IX",
    val: 9,
  },
  {
    romanSymbol: "VIII",
    val: 8,
  },
  {
    romanSymbol: "VII",
    val: 7,
  },
  {
    romanSymbol: "VI",
    val: 6,
  },
  {
    romanSymbol: "V",
    val: 5,
  },
  {
    romanSymbol: "IV",
    val: 4,
  },
  {
    romanSymbol: "III",
    val: 3,
  },
  {
    romanSymbol: "II",
    val: 2,
  },
  {
    romanSymbol: "I",
    val: 1,
  },
];

// function to take value when convert  button clicked.
convertBtn.addEventListener("click", () => {
  resetOutput();
  const numInput = getValidInput();
  convertNumToRoman(numInput);
});

// it will work when I press ENTER
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    resetOutput();
    const numInput = getValidInput();
    convertNumToRoman(numInput);
  }
});

//function to reset the innerHTML;

const resetOutput = () => {
  output.innerHTML = "";
  output.classList.remove("black-bg");
  output.classList.remove("orange-bg");
};

const convertNumToRoman = (num) => {
  romanSymbols.forEach((obj) => {
    while (num >= obj.val) {
      output.innerHTML += `${obj.romanSymbol}`;
      output.classList.add("black-bg");
      num -= obj.val;
    }
  });
};

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
