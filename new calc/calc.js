const hello = "why are you reading my code";
const output = document.getElementById("output");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const modeswitch = document.getElementById("switchmode");
const comma = document.getElementById("comma");
const memreclear = document.getElementById("memclear");
const memsub = document.getElementById("memsub");
const memadd = document.getElementById("memadd");
const sqrt = document.getElementById("sqrt");
const sum = document.getElementById("sum");
const percentage = document.getElementById("percent");
let easteregg = document.getElementById("pie");

// FIX 1: was `undefined` — must be a string so calculate() can call .includes() on it
let memoryvar = "0";

let operator;
let clickcount = 0;
let var1 = "";
let var2 = "";
let current = 1;

document.querySelectorAll(".numbers").forEach((numbutton) => {
  numbutton.addEventListener("click", () => {
    inputhandler(numbutton.dataset.value);
  });
});
document.querySelectorAll(".operator").forEach((opin) => {
  opin.addEventListener("click", () => {
    currenthandler(opin.dataset.value);
  });
});

memadd.addEventListener("click", () => {
  const currentVal = current === 1 ? var1 : var2;
  if (!currentVal) return;
  const result = calculate(memoryvar, "+", currentVal);

  if (result !== "ERR") memoryvar = String(result);
});

memsub.addEventListener("click", () => {
  const currentVal = current === 1 ? var1 : var2;
  if (!currentVal) return;
  const result = calculate(memoryvar, "-", currentVal);
  if (result !== "ERR") memoryvar = String(result);
});

memreclear.addEventListener("click", () => {
  clickcount++;
  if (clickcount === 1) {
    if (current === 1) {
      var1 = String(memoryvar);
    } else {
      var2 = String(memoryvar);
    }
    updatedisplay();
  }
  setTimeout(() => {
    if (clickcount >= 2) {
      memoryvar = "0";

      updatedisplay();
    }
    clickcount = 0;
  }, 300);
});

percentage.addEventListener("click", () => {
  inputhandler("%");
});

sqrt.addEventListener("click", () => {
  var1 = String(Math.sqrt(Number(var1)));
  updatedisplay();
});

sum.addEventListener("click", () => {
  if (var1 !== undefined && var1 !== "" && var2 !== undefined && var2 !== "") {
    var1 = String(calculate(var1, operator, var2));
    var2 = "";
    current = 1;
    operator = undefined;
    updatedisplay();
  }
});

modeswitch.addEventListener("click", () => {
  if (current === 1 && var1 === "") return;
  if (current === 2 && var2 === "") return;
  current === 1
    ? (var1 = String(Number(var1) * -1))
    : (var2 = String(Number(var2) * -1));
  updatedisplay();
});

backspace.addEventListener("click", () => {
  if (current === 1) {
    var1 = var1.slice(0, -1);
  } else {
    var2 = var2.slice(0, -1);
  }
  updatedisplay();
});

clear.addEventListener("click", () => {
  var1 = "";
  var2 = "";
  operator = undefined;
  current = 1;
  updatedisplay();
});

function currenthandler(ope) {
  if (var1 === undefined || var1 === "") {
    current = 1;
    output.value = NaN;
  } else if (var2 !== undefined && var2 !== "") {
    var1 = String(calculate(var1, operator, var2));
    operator = ope;
    current = 2;
    var2 = "";
  } else {
    operator = ope;
    current = 2;
  }
  updatedisplay();
}

function inputhandler(newelement) {
  if (newelement === ".") {
    const currentVar = current === 1 ? var1 : var2;
    if (!currentVar || currentVar.includes(".")) return;
  }

  if (newelement === "%") {
    const currentVar = current === 1 ? var1 : var2;
    if (!currentVar || currentVar.includes("%")) return;
  }

  if (current === 1 && var1.includes("%") && newelement !== "%") {
    var1 = "";
  }
  if (current === 2 && var2.includes("%") && newelement !== "%") {
    var2 = "";
  }

  if (current == 1) {
    var1 += newelement;
  } else {
    var2 += newelement;
  }
  updatedisplay();
}

function calculate(x, op, y) {
  x = String(x ?? "0");
  y = String(y ?? "0");

  if (x.includes("%")) {
    x = x.slice(0, -1);
    x = Number(x) / 100;
  }
  if (y.includes("%")) {
    y = y.slice(0, -1);
    if (op === "+" || op === "-") {
      y = Number(x) * (Number(y) / 100);
    }
    if (op === "x" || op === "/") {
      y = Number(y) / 100;
    }
  }

  let num1 = Number(x);
  let num2 = Number(y);
  switch (op) {
    case "+":
      return num1 + num2;
    case "x":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      if (num2 === 0) {
        return "ERR";
      } else {
        return num1 / num2;
      }
  }
}

function updatedisplay() {
  let res;
  if (operator == undefined && var2 == "") {
    res = var1;
  } else if (operator !== undefined && var2 == "") {
    res = var1 + operator;
  } else {
    res = var1 + operator + var2;
  }
  output.value = res.slice(0, 13);
}

easteregg.addEventListener("click", unnessecary);
function unnessecary() {
  let pi = 3.14 ** 123456789;
  console.log(pi);
  easteregg.remove();
  easteregg = undefined;
  pi = undefined;
}
