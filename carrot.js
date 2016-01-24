/*
~ Carrot.js
~ MIT Licensed
~ by Adam Byrne
*/

//Main Variables
var Carrot = {}
var canvas, context;

Carrot.init = function(id) {
  canvas = document.getElementById(id);
  context = canvas.getContext("2d");
};

Carrot.border = function(solid, color, thickness) {
  canvas.style.border = solid+" "+color+" "+thickness+"px"
};

Carrot.rect = function(type, x, y, w, h, color) {
  if(type === "fill"){
    context.fillStyle = (color);
    context.fillRect(x, y, w, h);
    context.fill();
  }else if (type === "stroke") {
    context.strokeStyle = (color);
    context.strokeRect(x, y, w, h);
    context.stroke();
  }
};
