// proyecto variables
const Nombre = document.querySelector("#Nombre");
const Telefono = document.querySelector("#Telefono");
const Email = document.querySelector("#Email");
const Identidad = document.querySelector("#identidad");
const Direcion=document.querySelector("#direcion");
const Cuidad = document.querySelector("#cuidad");
const btn = document.querySelector("#agregar");
const Dato={      
  Nombre:""  ,
  Telefono:"",
  Email:"",
  identidad:"",
  direcion:"",
  cuidad:""
}
document.addEventListener("DOMContentLoaded", () => {

  // eventos
  Nombre.addEventListener("blur", validar);
  Telefono.addEventListener("blur", validar);
  Email.addEventListener("blur", validar);
  Identidad.addEventListener("blur", validar);
  Direcion.addEventListener("blur", validar);
  Cuidad.addEventListener("blur", validar);

  scrollingBtn("#btn_scroll") 
  // funciones   principales

  function validar(e) {
    // validar  que no esten vacios los campos
    if (e.target.value.trim() === "") {
     mostrarAlerta(`${e.target.id} esta vacio`,e.target.parentElement);
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

  function mostrarAlerta(mensaje,referencia) {
    limpiarAlerta(referencia);
   
    //creaccion de alerta
    const alerta = document.createElement("p");
    alerta.classList.add( "bg-danger","text-center", "text-light","mt-2","alerta");
    alerta.textContent = mensaje;
  
    //agregar error al formulario
    referencia.appendChild(alerta);  
    setTimeout(()=>{
    alerta.remove()
    },2000)
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
      btn.disabled=true 
      return;
     }
      // quita estilos y disable del botton guardar
     btn.disabled=false
     
  }  
  function scrollingBtn(btn){
   const btnscroll=document.querySelector(btn)
   //luego se actvia el evento window scroll
   window.addEventListener("scroll",(e)=>{
    let scrolltop=window.pageYOffset
    if(scrolltop>400){
      btnscroll.classList.remove("ocultar")
    }else{
      btnscroll.classList.add("ocultar")
    }
  
   })
   btnscroll.addEventListener("click",(e)=>{
   if(e.target.matches(btn)){
    window.scrollTo({behavior:"smooth",top:0})
   }

   })
  }
  
}); 




