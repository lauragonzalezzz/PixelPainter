'use strict';

const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let name = document.getElementById('name').value;
  const pixels = document.querySelectorAll('.allDivs');
  const pixelStates = [];
  for (let i = 0; i < pixels.length; i++) {
    if (!pixels[i].style.background){
      pixelStates.push("rgb(255, 255, 255)$");
    }
    else {
      pixelStates.push(pixels[i].style.background + "$");
    }
  }

  const payload = "name=" + name + "&pixelStates=" + pixelStates;

  const xReq = new XMLHttpRequest();
  xReq.addEventListener('load', (event) => {});
  xReq.open("POST", '/save');
  xReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xReq.send(payload);

});