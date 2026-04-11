const button1 = document.getElementById("toggle1");
const button2 = document.getElementById("toggle2");
const button3 = document.getElementById("toggle3");

const content1 = document.querySelector(".itemcontent1");
const content2 = document.querySelector(".itemcontent2");
const content3 = document.querySelector(".itemcontent3");

const arr1 = document.querySelector("#toggle1 .fa-solid.fa-chevron-up");
const arr2 = document.querySelector("#toggle2 .fa-solid.fa-chevron-up");
const arr3 = document.querySelector("#toggle3 .fa-solid.fa-chevron-up");

button1.addEventListener("click", function () {
  button1.classList.toggle("open");
  arr1.classList.toggle("open");
  content1.classList.toggle("open");
});

button2.addEventListener("click", function () {
  button2.classList.toggle("open");
  arr2.classList.toggle("open");
  content2.classList.toggle("open");
});

button3.addEventListener("click", function () {
  button3.classList.toggle("open");
  arr3.classList.toggle("open");
  content3.classList.toggle("open");
});
