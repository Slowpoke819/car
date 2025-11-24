let pos = -200;
        const car = document.querySelector('.car');
        
        setInterval(() => {
            pos += 2;
            car.style.left = pos + 'px';
        }, 10);