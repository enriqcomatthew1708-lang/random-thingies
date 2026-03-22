const gedbutton = document.getElementById("gedungtoggle");
const gedarrow = document.querySelector(
  "#gedungtoggle .fa-solid.fa-chevron-up",
);
const gedcont = document.querySelector(".gedungcontent");

const labbutton = document.getElementById("labtoggle");
const labarrow = document.querySelector("#labtoggle .fa-solid.fa-chevron-up");
const labcont = document.querySelector(".labcontent");

const lapbutton = document.getElementById("lapangantoggle");
const laparrow = document.querySelector(
  "#lapangantoggle .fa-solid.fa-chevron-up",
);
const lapcont = document.querySelector(".lapcontent");

const roombutton = document.getElementById("roomtoggle");
const roomarrow = document.querySelector("#roomtoggle .fa-solid.fa-chevron-up");
const roomcont = document.querySelector(".roomcontent");

const canteenbutton = document.getElementById("canteentoggle");
const canteenarow = document.querySelector(
  "#canteentoggle .fa-solid.fa-chevron-up",
);
const canteencont = document.querySelector(".canteencontent");

const transbutton = document.getElementById("transtoggle");
const transarrow = document.querySelector(
  "#transtoggle .fa-solid.fa-chevron-up",
);
const transcont = document.querySelector(".transcontent");

const musicbutton = document.getElementById("musictoggle");
const musicarrow = document.querySelector(
  "#musictoggle .fa-solid.fa-chevron-up",
);
const musiccont = document.querySelector(".musiccontent");

const allButtons = [
  gedbutton,
  labbutton,
  lapbutton,
  roombutton,
  canteenbutton,
  transbutton,
  musicbutton,
];
const allArrows = [
  gedarrow,
  labarrow,
  laparrow,
  roomarrow,
  canteenarow,
  transarrow,
  musicarrow,
];
const allConts = [
  gedcont,
  labcont,
  lapcont,
  roomcont,
  canteencont,
  transcont,
  musiccont,
];

function closeAll() {
  allButtons.forEach((b) => b.classList.remove("open"));
  allArrows.forEach((a) => a.classList.remove("open"));
  allConts.forEach((c) => c.classList.remove("open"));
}

gedbutton.addEventListener("click", function () {
  const isOpen = gedcont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    gedbutton.classList.add("open");
    gedarrow.classList.add("open");
    gedcont.classList.add("open");
  }
});

labbutton.addEventListener("click", function () {
  const isOpen = labcont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    labbutton.classList.add("open");
    labarrow.classList.add("open");
    labcont.classList.add("open");
  }
});

lapbutton.addEventListener("click", function () {
  const isOpen = lapcont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    lapbutton.classList.add("open");
    laparrow.classList.add("open");
    lapcont.classList.add("open");
  }
});

roombutton.addEventListener("click", function () {
  const isOpen = roomcont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    roombutton.classList.add("open");
    roomarrow.classList.add("open");
    roomcont.classList.add("open");
  }
});

canteenbutton.addEventListener("click", function () {
  const isOpen = canteencont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    canteenbutton.classList.add("open");
    canteenarow.classList.add("open");
    canteencont.classList.add("open");
  }
});

transbutton.addEventListener("click", function () {
  const isOpen = transcont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    transbutton.classList.add("open");
    transarrow.classList.add("open");
    transcont.classList.add("open");
  }
});

musicbutton.addEventListener("click", function () {
  const isOpen = musiccont.classList.contains("open");
  closeAll();
  if (!isOpen) {
    musicbutton.classList.add("open");
    musicarrow.classList.add("open");
    musiccont.classList.add("open");
  }
});
