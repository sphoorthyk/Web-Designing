var inputStr;
var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

function output(ele) {
  inputStr = ele.value;
  var optext = document.getElementById("optext");
  var opcode = document.getElementById("opcode");
  optext.innerHTML = "";
  opcode.innerText = "";
  for(var i=0; i<inputStr.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("style", `color: ${colors[i%7]}`);
    span.innerHTML = inputStr[i];
    optext.appendChild(span);
    
    opcode.innerText += `<span style='color: ${colors[i%7]}'>${inputStr[i]}</span> `;
  }
}
