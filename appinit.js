// variables globales
const inputnombre = document.querySelector("#Nombre"),
  inputtelefono = document.querySelector("#Telefono"),
  inputcorreo = document.querySelector("#Email"),
  inputidentidad = document.querySelector("#identidad"),
  inputdireccion = document.querySelector("#direcion"),
  inputcuidad = document.querySelector("#cuidad");



// variables genererales
const btnagregar = document.querySelector("#agregar");
const btnactualizar = document.querySelector("#actualizar");
const formulario = document.querySelector("#form");
const cardsContactos = document.querySelector("#card-contacto");

let Contactos = []; 

const DatosContacto = {
  id: Date.now(),
  Nombre: "",
  Telefono:"",
  Correo:"",
  Identidad:"",
  Direcion:"",
  Cuidad:"",
};

// funcion iniciadora

agendaContactos();

//funcion principal

function agendaContactos() {
  formulario.addEventListener("submit", agregarContacto);
   btnactualizar.addEventListener("click",agregarContacto);
  document.addEventListener("DOMContentLoaded", () => {
    // DEVUELVE EL VALOR DEL LOCALSTORAGE SI EXISTE SI NO ASIGANA UN [] PARA EVIATAR EL NULL
    Contactos = JSON.parse(localStorage.getItem("CONTACTOS")) || [];
    console.log(Contactos);
    mostarContacto();
  });
}

// funciones principales

function agregarContacto(e) {
  e.preventDefault();
//variables locales para llenar el objeto
  DatosContacto.Nombre = inputnombre.value
  DatosContacto.Telefono = inputtelefono.value
  DatosContacto.Correo=  inputcorreo.value
  DatosContacto.Identidad = inputidentidad.value
  DatosContacto.Direcion= inputdireccion.value
  DatosContacto.Cuidad= inputcuidad.value
// mapeo del aray mediante id para en caso de editado no crear una copia nueva
  const contactoEditar = Contactos.find((contacto) => contacto.id === DatosContacto.id);
  if (contactoEditar) {
    // Actualizar los datos del contacto con los valores del formulario
    contactoEditar.Nombre = DatosContacto.Nombre;
    contactoEditar.Telefono = DatosContacto.Telefono;
    contactoEditar.Correo = DatosContacto.Correo;
    contactoEditar.Identidad = DatosContacto.Identidad;
    contactoEditar.Direcion = DatosContacto.Direcion;
    contactoEditar.Cuidad = DatosContacto.Cuidad; 
    btnagregar.textContent = "Agregar";
  } else {
// caso de no existir se crea uno nuevo
  Contactos = [...Contactos, DatosContacto];
  }
  mostarContacto();
  console.log(Contactos);
  setTimeout(()=>{
    formulario.reset()
  },3000)

}

// funciones segundarias
function mostarContacto() {
  limpiarHTML();
  if (Contactos.length > 0) {
    Contactos.forEach((contacto) => {
      const{Nombre,Correo,Identidad,Telefono,Direcion,Cuidad,id}=contacto
      // creando  componente html
      const card =`<div class="card mt-4 mb-4">
      <div class="card-header bg-transparent border-success text-center"><h5>${Nombre}<h5></div>
           <div class="card-body text-success">
             <table class="table  table-bordered">
               <thead class="text-center">
                 <tr >
                   <th scope="col">INFORMACION</th>
                   <th scope="col">DATOS</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <th scope="row">Correo</th>
                   <td>${Correo}</td>
                 </tr>
                 <tr>
                   <th scope="row">Cedula</th>
                   <td>${Identidad}</td>
                 </tr>
                 <tr>
                   <th scope="row">Telefono</th>
                   <td>${Telefono}</td>
                 </tr>
                 <tr>
                   <th scope="row">Direcion</th>
                   <td>${Direcion}</td>
                 </tr>
                 <tr>
                   <th scope="row">Cuidad</th>
                   <td>${Cuidad}</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div class="card-footer bg-transparent border-success text-center">
              <button class="btn_delete bg-danger"onclick="borrarLocalStoreContacto(${id})"><i class="bi bi-person-x h4"></i></button>
              <button  class="btn_delete bg-success"onclick="cargarDatosContacto(${id})">Editar</button>
           </div>
         </div>    `
     /*`
           <div class="card mt-4 mb-4">
             <div class="card-header bg-transparent border-success text-center"><h5>${Nombre}<h5></div>
                  <div class="card-body text-success">
                    <table class="table  table-bordered">
                      <thead class="text-center">
                        <tr >
                          <th scope="col">INFORMACION</th>
                          <th scope="col">DATOS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Correo</th>
                          <td>${Correo}</td>
                        </tr>
                        <tr>
                          <th scope="row">Cedula</th>
                          <td>${Identidad}</td>
                        </tr>
                        <tr>
                          <th scope="row">Telefono</th>
                          <td>${Telefono}</td>
                        </tr>
                        <tr>
                          <th scope="row">Direcion</th>
                          <td>${Direcion}</td>
                        </tr>
                        <tr>
                          <th scope="row">Cuidad</th>
                          <td>${Cuidad}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer bg-transparent border-success text-center"><a class="btn_delete bg-danger"onclick="borrarLocalStoreContacto(${id})"><i class="bi bi-person-x h4"></i></a>
                  <div class="card-footer bg-transparent border-success text-center"><a class="btn_delete bg-success"onclick="cargarDatosContacto(${id})">Editar</a>
                  </div>
                </div>         
      `;*/
     const divContacto=document.createElement('div');
     divContacto.classList.add("col","col-md-10")
     divContacto.innerHTML = card; 

     cardsContactos.appendChild(divContacto)

    });
  }
  GuardarStorage();
}

function limpiarHTML() {
  while (cardsContactos.firstChild) {
    cardsContactos.removeChild(cardsContactos.firstChild);
  }
}

// funciones para manejar el Localstore

function GuardarStorage() {
  localStorage.setItem("CONTACTOS", JSON.stringify(Contactos));
}

function borrarLocalStoreContacto(id) {
  Contactos = Contactos.filter((contacto) => contacto.id !== id);
  console.log("borrarando localstorage", id);
  mostarContacto();
}

function cargarDatosContacto(id) {
  const contacto = Contactos.find(contacto => contacto.id === id);
  inputnombre.value = contacto.Nombre;
  inputtelefono.value = contacto.Telefono;
  inputcorreo.value = contacto.Correo;
  inputidentidad.value = contacto.Identidad;
  inputdireccion.value = contacto.Direcion;
  inputcuidad.value = contacto.Cuidad;
  editable = true;
  DatosContacto.id = id;

}