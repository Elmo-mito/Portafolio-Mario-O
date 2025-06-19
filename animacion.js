let control = document.querySelector('#imagen_controlcito');
let currentRotation = 0;
let correo = document.querySelector('#correito');

//Función de rotación del controlsito
control.addEventListener('click', () => {
    currentRotation += 360;
    control.style.transform = `rotate(${currentRotation}deg)`; 
});

// Función de copiado en portapapeles del correo
correo.addEventListener('click', () => {
        const texto = correo.textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
        alert('Correo copiado al portapapeles');
        })
        .catch(err => {
        console.error('Error al copiar: ', err);
        });
});