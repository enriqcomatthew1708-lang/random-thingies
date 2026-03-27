const eksulbutton = document.getElementById("buttonekstrakulikuler");
const eksulsubmenu = document.querySelector(".ekstrakulikulercontent");
const arrow1 = document.querySelector(".fa-solid.fa-chevron-down");
const button = document.getElementById("dropdownbutton");
const dropdowncontent = document.querySelector(".dropdowncontainer");

const infobutton = document.getElementById("buttoninformasi");
const infosubmenu = document.querySelector(".informasicontent");
const arrow3 = document.querySelector(".fa-solid.fa-chevron-left");

button.addEventListener("click", function () {
  dropdowncontent.classList.toggle("open");
  button.classList.toggle("open");
});

infobutton.addEventListener("click", function () {
  eksulsubmenu.classList.remove("open");
  arrow1.classList.remove("open");

  infosubmenu.classList.toggle("open");
  arrow3.classList.toggle("open");
});

eksulbutton.addEventListener("click", function () {
  eksulsubmenu.classList.toggle("open");
  arrow1.classList.toggle("open");

  infosubmenu.classList.remove("open");
  arrow3.classList.remove("open");
});
