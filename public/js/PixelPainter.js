function pixelpainter() {


//pixelPainterRuns

  var storecolor = null;

  document.getElementById('heart').addEventListener('click', function(event){
     storecolor = 'heart';
  });

  document.getElementById('star').addEventListener('click', function(){
     storecolor = 'star';
  });

  document.getElementById('circle').addEventListener('click', function(){
     storecolor = 'circle';
  });

  document.getElementById('eraseBtn').addEventListener('click', function(){
     storecolor = 'white';
  });

  document.getElementById('clearBtn').addEventListener('click', clearAll);

// Create Color Buttons
  var colors = ['#FF557C', '#E84DBE', '#EB61FF', '#AA4DE8', '#8D55FF', '#4447E8', '#5886FF', '#449DE8', '#4BDCFF', '#47E8B0', '#5BFF98', '#47E856', '#79FF4E', '#FFB944', '#FF8F50', '#E8611F', '#FF5044', '#E8271F', '#FF2274', '#FF1244'];

  var paintColorContainer = document.getElementById('paintColors');

  function createPaintColorButtons() {
    for (var i = 0; i < 20; i++) {
      var paintColor = document.createElement('button');
      paintColor.value = colors[i];
      paintColor.className = 'colorBtn';
      paintColor.style.background = paintColor.value;
      paintColorContainer.appendChild(paintColor);
    }
      paintColorContainer.addEventListener('click', function() {
        storecolor = event.target.value;
      });
  }

createPaintColorButtons();

// Create Little Divs

  var units = 812;
  var outerDiv = document.getElementById('gridDiv');

  function  createLittleDivs() {
    for(var i = 0; i < units; i++) {
      var newDiv = document.createElement('div');
      newDiv.className = 'allDivs';
      outerDiv.appendChild(newDiv);
    }
  }

  createLittleDivs();


// Adds event listeners to the grid and the individual divs

  var keepGoing = false;

  function addEventListener() {

    outerDiv.addEventListener('mousedown', function(event) {
      if (colors.indexOf(storecolor) !== -1) {
      event.target.style.background = storecolor;
      }
      else {
        event.target.style.background = null;
        event.target.classList.add(storecolor);
      }
      keepGoing = true;
    }); //END OF MOUSEDOWN

    outerDiv.addEventListener('mouseover', function(event) {
      if(keepGoing === true) {
        if (colors.indexOf(storecolor) !== -1) {
          event.target.style.background = storecolor;
        }
        else {
          event.target.style.background = null;
          event.target.classList.add(storecolor);
        }
      }
    }); //END OF MOUSEOVER

    outerDiv.addEventListener('drag', function(event) {
      keepGoing = false;
    });  //END OF DRAG

    if(keepGoing === false) {
      outerDiv.addEventListener('mouseup', function(event) {
        keepGoing = false;
      });
    } //END OF MOUSEUP
  }  //End of addEventListener function

  addEventListener();

// Clear Button Functionality

  divsToClear = document.querySelectorAll('.allDivs');

  function clearAll(event) {
    for(var i = 0; i < divsToClear.length; i++) {
      divsToClear[i].style.background = null;
      divsToClear[i].className = 'allDivs';
    }
  }

}//End of Pixel Painter

var pixelpainter = pixelpainter();