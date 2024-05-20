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
function validaEmail(){
    
  let nombre = document.querySelector('#nombre').value;
  let email = document.querySelector('#email').value;    
  // let soloPalabras = /^[a-z\s]+$/i;
  // console.log(soloPalabras.test('jozze'));
  let prueba = true;
  let msgError ='Datos incorrectos  ';
  
  if( nombre === ''){
      prueba = false;
      msgError += ' nombre' ; 
  }
  
  if(email === ''){
      prueba = false;
      msgError += ' email';
  }
  
  if(prueba){
      console.log('Suscripcion Realizada!!')
  }else{
      console.log(msgError)
  }
}
  
  const formulario = document.querySelector('#formEnvio');
  let mensaje = document.querySelector('#rtaForm');
  
  formulario.addEventListener('submit', evento => {
             validaEmail();
      evento.preventDefault();
  })
