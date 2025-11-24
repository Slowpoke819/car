let car = document.querySelector('.car');
let carWidth = 200;
let stop = window.innerWidth - carWidth - 50;
let pos = -carWidth;
let move = setInterval(function() {
  if (pos < stop) {
    pos += 4;
    car.style.left = pos + "px";
  } else {
    clearInterval(move);
  }
}, 10);
