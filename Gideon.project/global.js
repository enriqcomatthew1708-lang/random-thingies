const eksulbutton = document.getElementById("buttonekstrakulikuler");
const eksulsubmenu = document.querySelector(".ekstrakulikulercontent");
const arrow1 = document.querySelector(".fa-solid.fa-chevron-down");
const button = document.getElementById("dropdownbutton");
const dropdowncontent = document.querySelector(".dropdowncontainer");
const akademikbutton = document.getElementById("buttonakademik");
const akademiksubmenu = document.querySelector(".akademikcontent");
const arrow2 = document.querySelector(".fa-solid.fa-chevron-up");
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

  akademiksubmenu.classList.remove("open");
  arrow2.classList.remove("open");

  infosubmenu.classList.toggle("open");
  arrow3.classList.toggle("open");
});

akademikbutton.addEventListener("click", function () {
  eksulsubmenu.classList.remove("open");
  arrow1.classList.remove("open");

  akademiksubmenu.classList.toggle("open");
  arrow2.classList.toggle("open");

  infosubmenu.classList.remove("open");
  arrow3.classList.remove("open");
});

eksulbutton.addEventListener("click", function () {
  akademiksubmenu.classList.remove("open");
  arrow2.classList.remove("open");

  eksulsubmenu.classList.toggle("open");
  arrow1.classList.toggle("open");

  infosubmenu.classList.remove("open");
  arrow3.classList.remove("open");
});
