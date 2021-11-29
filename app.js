// assiging variables to individual ids
let mainboxText = document.getElementById("mainboxText");
let mainboxNumber = document.getElementById("mainboxNumber");
let keyValue = document.getElementById("keyValue");
let keyNumber = document.getElementById("whichNumber");
let keyCode = document.getElementById("keyCodevalue");
let boxKey = document.getElementById("eventKey");
let boxWhich = document.getElementById("eventWhich");
let boxCode = document.getElementById("keyCode");

// event listener for keypress
document.addEventListener("keypress", (event) => {
  //command to hide the text from the main display
  mainboxText.style.display = "none";
  boxKey.style.display = "block";
  boxWhich.style.display = "block";
  boxCode.style.display = "block";
  //mainboxNumber and keyNumber populated with event.which result
  mainboxNumber.textContent = event.which;
  keyNumber.textContent = event.which;
  //keyValue is populated with event.key, returns the letter typed
  keyValue.textContent = event.key;
  //keyCode populated with the key code (eg KeyD)
  keyCode.textContent = event.code;
});
