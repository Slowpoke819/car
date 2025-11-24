let car = document.querySelector('.car');
let scene = document.querySelector('.scene');
let carWidth = 200;
let stop = scene.clientWidth - carWidth - 50;
let pos = -carWidth;
        let move = setInterval(() => {
            if (pos < stop) {
                pos += 3;
                car.style.left = pos + 'px';
            } else {
                clearInterval(move);
            }
        }, 10);
