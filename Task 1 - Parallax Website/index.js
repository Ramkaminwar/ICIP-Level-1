const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    let rotateDegree = (xValue / (window.innerWidth/2)) *20;

    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx/2;
        let speedy = el.dataset.speedy/2;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotate;
        
        let isLeft = parseFloat(getComputedStyle(el).left)< window.innerWidth/2 ? 1 : -1;
        
        let zValue = e.clientX - parseFloat(getComputedStyle(el).left) * isLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(5500px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
    });
});

if(window.innerWidth >= 725){
    main.style.maxHeight=`${window.innerWidth * 0.6}px`;
}
else{
    main.style.maxHeight=`${window.innerWidth * 1.6}px`;
}