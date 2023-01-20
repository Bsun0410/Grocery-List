var item = "";
var popping = new Audio("popClick.mp3");



function addNeed() {
  const item = document.getElementById("addItem").value;
  document.getElementById("needList").innerHTML += `<li><input type="checkbox" name="item"> ${item} <a href="#">Delete</a> <a href="#">Drag</a></li>`;
    popping.play();

}

function addHave() {
  const item = document.getElementById("addItem").value;
  document.getElementById("haveList").innerHTML += `<li><input type="checkbox" name="item"> ${item} <a href="#">Delete</a> <a href="#">Drag</a></li>`;
      popping.play();

}

