const contactoTitulo = document.createElement('h2');
cuerpo.appendChild(contactoTitulo);
contactoTitulo.innerText = "Ponete en contacto con nosotros.";
contactoTitulo.style.color = colorAmarillo;
contactoTitulo.style.fontFamily = 'buda';   
contactoTitulo.style.padding = '3rem';
contactoTitulo.style.fontSize = '3rem';
contactoTitulo.style.backgroundColor = 'black';

const divContenedorForm = document.createElement('div');
divContenedorForm.id = ('idDivContenedorForm');
cuerpo.appendChild(divContenedorForm);
divContenedorForm.style.padding = '3rem';

const formContacto = document.createElement('form');
formContacto.id= 'formulario';
divContenedorForm.appendChild(formContacto);

//nombre label
const tNombre = document.createElement('label');
tNombre.textContent = 'Nombre:';
formContacto.appendChild(tNombre);
//nombre input
const inputNombre = document.createElement('input');
inputNombre.id ='nombreForm';
formContacto.appendChild(inputNombre);
inputNombre.type ='text';

//edad label
const tEdad = document.createElement('label');
tEdad.textContent = 'Edad:';
formContacto.appendChild(tEdad);
//nombre input
const inputEdad = document.createElement('input');
inputEdad.id ='edadForm';
formContacto.appendChild(inputEdad);
inputEdad.type ='number';

//Mail label
const tMail = document.createElement('label');
tMail.textContent = 'E-Mail:';
formContacto.appendChild(tMail);
//Mail input
const inputMail = document.createElement('input');
inputMail.id ='mailForm';
formContacto.appendChild(inputMail);
inputMail.type ='e-mail';

//Mensaje label
const tMensaje = document.createElement('label');
tMail.textContent = 'Mensaje:';
formContacto.appendChild(tMensaje);
//Mensaje input
const inputMensaje = document.createElement('input');
inputMail.id ='mensajeForm';
formContacto.appendChild(tMensaje);
tMensaje.type ='text';








// let miFormulario = document.getElementById("formulario");
// const nombreForm = document.getElementById('nombreForm');
// const edadForm = document.getElementById('edadForm');
// const mainContact = document.getElementById('mainContact');
// const divContact = document.createElement('div');
// const textContact = document.createElement('h4');

// // miFormulario.addEventListener("submit", validarFormulario);

// // function validarFormulario(e){
// //     e.preventDefault(); // Evitar el evento Submit por defecto - Que es Actualizar la Pagina.
// //     console.log("Formulario Enviado");    
// // }
// mainContact.appendChild(divContact);

// // miFormulario.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     divContact.appendChild(textContact);
// //     textContact.innerHTML = `La Edad de ${nombreForm.value} es de: ${edadForm.value} años.`;
// // })

// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//     e.preventDefault();
//     let formulario = e.target;
//     divContact.appendChild(textContact);
//     textContact.innerHTML = `La Edad de ${formulario.children[1].value} es 
//                                 de: ${formulario.children[3].value} años.`;
    
// }

