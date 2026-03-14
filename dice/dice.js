let value = [];
let img = [];
let imgplace = document.getElementById("diceimg");
document.getElementById("but1").onclick = function rolldice() {
  value = [];
  img = [];
  let reqval = document.getElementById("in1").value;

  if (reqval > 5) {
    document.getElementById("d1").textContent =
      " please enter a smaller number";
  } else {
    for (let i = 0; i < reqval; i++) {
      const mathval = Math.floor(Math.random() * 6) + 1;
      value.push(mathval);
      const imgtag = `<img src="dice.img/${mathval}.png" alt=" dice img of ${mathval}">`;
      document.getElementById("d1").textContent = "dice:" + value.join(",");
      img.push(imgtag);
      imgplace.innerHTML = img.join("");
    }
  }
};
