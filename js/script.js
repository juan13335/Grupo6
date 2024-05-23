let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlides();
}

showSlides();
setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos

// contacto.html
console.log('inicio')
function validarForm(){
  let nombre = document.querySelector('#nombre').value;
  let apellido = document.querySelector('#apellido').value;
  let email = document.querySelector('#email').value;

  let soloPalabras = /^[a-z\s]+$/i; // Expresion regular

  let correo= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  let vale=true //prueba  
  let msgError= 'Datos Incorrecto:  ';

//    Campos de texto
  if(nombre === ''){
    if (!soloPalabras.test(nombre)) {
    vale=false; 
    msgError += 'nombre'
    
  }  
  if(apellido === ""){
    if (!soloPalabras.test(apellido)) {
    vale=false; 
    msgError += 'apellido'
  
  }

  if(email === ""){
    if (!corre.test(email)) {
    vale=false; 
    msgError += 'apellido'
  
  }

  if ((vale)){
    console.log('Datos ingresados!!')
    }else{
    console.log(msgError)
    }   
  }
}
}
}
// querySelector  

const formulario = document.querySelector('button');
let mensaje = document.querySelector('#rtaForm');

formulario.addEventListener('click', evento => {
  validarForm(); 
  evento.preventDefault();
})
// console.log('fin');


