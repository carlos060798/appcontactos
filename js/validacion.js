// proyecto de validacion de formulario

document.addEventListener("DOMContentLoaded", () => {

    const Dato={
        Nombre:""  ,
        Telefono:"",
        Email:"",
        Numero_identidad:"",
        Direcion:"",
        Cuidad:""
      }
  // elementos de formulario

  const inputnombre = document.querySelector("#Nombre");
  const inputTelefono = document.querySelector("#Telefono");
  const inputemail = document.querySelector("#Email");
  const Identidad = document.querySelector("#identidad");
  const Direcion=document.querySelector("#direcion");
  const Cuidad = document.querySelector("#cuidad");
  const formulario = document.querySelector("#form");
  const btnsub = document.querySelector("#btn"); 
  const btnreset = document.querySelector("#reset")
// Objeto para validar datos de   form


  // eventos
  inputnombre.addEventListener("blur", validar);
  inputTelefono.addEventListener("blur", validar);
  inputemail.addEventListener("blur", validar);
  Identidad.addEventListener("blur", validar);
  Direcion.addEventListener("blur", validar);
  Cuidad.addEventListener("blur", validar);
 // btnreset.addEventListener("click",(e)=>{
/*reiniciar objeto datos
   Dato.Nombre="";
   Dato.Email="";
   Dato.Telefono="";
   Dato.Tipocontacto="";
  }) */
 
  // funciones   principales

  function validar(e) {
    // validar  que no esten vacios los campos
    if (e.target.value.trim() === "") {
      /* @(param) e.target.id= {personaliza el mensaje segun el elemento faltante} 
@(param) e.target.parentElement= {referencia el elemento al cual se le va añadir la alerta} 
*/
      mostrarAlerta(
        `el campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      Dato[e.target.name]="";
      validarDatos()
      return;
    }
// if para validdar si el correo esta escrito correctamente
    if(e.target.id === "Email"&&!validardeEmail(e.target.value)){
        mostrarAlerta(`el email no es correto`,e.target.parentElement)
        Dato[e.target.name]=""; //validar que los campos no sehan elimiandos
        validarDatos()
          return;   
    }
 limpiarAlerta(e.target.parentElement);

// desestructuracion de objet Dato
 Dato[e.target.name]=e.target.value.trim().toLowerCase()
 console.log(Dato)
 validarDatos()

  }

  // funciones axuliares

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //creaccion de alerta
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add(
      "bg-danger",
      "text-center",
      "text-light",
      "mt-2",
      "alerta"
    );
    //agregar error al formulario
    referencia.appendChild(alerta);
  }

  function limpiarAlerta(referencia) {
    // comprobar si existe ya una alerta
    const existe = referencia.querySelector(".alerta");
    if (existe) {
      existe.remove();
    }
  }
  function validardeEmail(email) {
    //validacion de email
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
   return resultado
  }

  function validarDatos(){
     if(Object.values(Dato).includes("")){
      // quita estilos y disable del botton guardar
      btnsub.classList.add("opacity-50")
      btnsub.disabled=true 
      return;
     }
      // quita estilos y disable del botton guardar
     btnsub.classList.remove("opacity-50")
     btnsub.disabled=false
     
  }  


});
