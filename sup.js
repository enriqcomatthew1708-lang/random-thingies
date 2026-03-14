let minum = 1;
let maxnum;
let guesses = 0;
let guessnum;
let randnum;
let correct = 0;
let wrong = 0;
document.getElementById("but1").onclick = function () {
  minum = Number(document.getElementById("min1").value);
  maxnum = Number(document.getElementById("max1").value);

  if (maxnum > 10000 || minum <= 0 || guessnum <= 0) {
    document.getElementById("num").textContent = "please enter a valid number";
  } else {
    randnum = Math.floor(Math.random() * (maxnum - minum + 1)) + minum;
    guessnum = Number(document.getElementById("gs1").value);
    if (guessnum == randnum) {
      correct++;
      document.getElementById("r1").textContent = correct;
    } else {
      wrong++;
      document.getElementById("w1").textContent = wrong;
    }

    document.getElementById("num").textContent = randnum;
  }
};
