const numbersval = "0123456789";
const upperCaseval = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseval = "abcdefghijklmnopqrstuvwxyz";
const symbolsval = "!@#$%^&*()_+-=[]{}|;:,.<>?";

document.getElementById("sbmt").onclick = function () {
  const reqval = Number(document.getElementById("length").value);

  let num = document.getElementById("Num").checked;
  let Uppercase = document.getElementById("Uppercase").checked;
  let Lowercase = document.getElementById("Lowercase").checked;
  let Symbols = document.getElementById("Symbols").checked;

  if (!num && !Uppercase && !Lowercase && !Symbols) {
    document.getElementById("Passout").textContent =
      "Select one or more options";
  } else if (reqval > 128) {
    document.getElementById("Passout").textContent = "Select a lower number ";
  } else if (reqval < 8) {
    document.getElementById("Passout").textContent =
      "Please select a bigger number";
  } else {
    let alchar = [];
    if (Lowercase) {
      alchar.push(...lowerCaseval);
    }
    if (Uppercase) {
      alchar.push(...upperCaseval);
    }
    if (Symbols) {
      alchar.push(...symbolsval);
    }
    if (num) {
      alchar.push(...numbersval);
    }

    let password = [];
    for (let i = 0; i < reqval; i++) {
      const randomIndex = Math.floor(Math.random() * alchar.length);
      password.push(alchar[randomIndex]);

      document.getElementById("Passout").textContent = password.join("");
    }
  }
};
