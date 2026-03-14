let result;
let temp;

document.getElementById("Chan").onclick = function () {
  let current = document.getElementById("t1").textContent;
  if (current == "Celcius") {
    document.getElementById("t1").textContent = "Farenheit";
    document.getElementById("t2").textContent = "Celcius";
  } else {
    document.getElementById("t2").textContent = "Farenheit";
    document.getElementById("t1").textContent = "Celcius";
  }
};

document.getElementById("con").onclick = function () {
  temp = document.getElementById("cel").value;
  if (document.getElementById("t1").textContent == "Celcius") {
    result = Number(temp * 1.8 + 32);
    document.getElementById("far").textContent = result.toFixed(2);
  } else {
    result = Number((temp - 32) / 1.8);
    document.getElementById("far").textContent = result.toFixed(2);
  }
};
