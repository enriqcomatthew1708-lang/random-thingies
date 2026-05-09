const trigger = document.getElementById("trigger");
const switchtrigger = document.getElementById("switch");
let label1 = document.querySelector(".label1");
const output = document.getElementById("text2");

let condition = "Caesartoen";

function switcheroo() {
  if (label1.textContent == "Caesar Text here") {
    label1.textContent = "English Text here";
    condition = "Entocaesar";
  } else {
    label1.textContent = "Caesar Text here";
    condition = "Caesartoen";
  }
}

function processinput() {
  let input = document.getElementById("text1").value;
  const shifttype = Number(document.getElementById("userinput").value);
  let result = "";

  if (input == "") {
    output.value = "Please add text";
  } else if (shifttype === 0) {
    output.value = "Please choose a shift";
  } else {
    function translate(char) {
      let code = char.charCodeAt(0);
      const isUpperCase = code >= 65 && code <= 90;
      const isLowerCase = code >= 97 && code <= 122;
      if (!isUpperCase && !isLowerCase) return char;

      const base = isUpperCase ? 65 : 97;
      if (condition === "Caesartoen") {
        return String.fromCharCode(((code - base + shifttype) % 26) + base);
      } else {
        return String.fromCharCode(
          ((code - base - shifttype + 26) % 26) + base,
        );
      }
    }
    input.split("").forEach((element) => {
      result += translate(element);
    });

    output.value = result;
  }
}

trigger.addEventListener("click", processinput);
switchtrigger.addEventListener("click", switcheroo);
