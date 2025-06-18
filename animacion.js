let control = document.querySelector('#imagen_controlcito');
let currentRotation = 0;

control.addEventListener('çlick', () => {
    currentRotation += 90;
    control.style.transform = `rotate(${currentRotation}deg)`;
}); 