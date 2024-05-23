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
//   if(nombre === ''){
    if (!soloPalabras.test(nombre)) {
    vale=false; 
    msgError += 'nombre'
    
  }  
//   if(apellido === ""){
    if (!soloPalabras.test(apellido)) {
    vale=false; 
    msgError += 'apellido'
  
  }

//   if(email === ""){
    if (!correo.test(email)) {
    vale=false; 
    msgError += 'apellido'
  
  }

  if ((vale)){
    console.log('Datos ingresados!!')
    }else{
    console.log(msgError)
    }   
  }
// }
// }
// }
// querySelector  

const formulario = document.querySelector('button');
let mensaje = document.querySelector('#rtaForm');

formulario.addEventListener('click', evento => {
  validarForm(); 
  evento.preventDefault();
})
console.log('fin');