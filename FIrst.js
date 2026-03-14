const decreasebtn= document.getElementById("dcrs");
const increasebtn= document.getElementById("inrs");
const resetbtn= document.getElementById("rstb");
const countlbl= document.getElementById("countlbl")

let count=0;

increasebtn.onclick = function(){
     count++;
countlbl.textContent = count;

}
decreasebtn.onclick= function(){
count--;
countlbl.textContent = count;


}
resetbtn.onclick = function(){
count = 0
countlbl.textContent = count;
}
