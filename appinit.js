// variables genererales
const btnagregar = document.querySelector("#agregar");
const formulario = document.querySelector("#form");
const cardsContactos = document.querySelector("#card-contacto");

let Contactos = [];

// funcion iniciadora

agendaContactos();

//funcion principal

function agendaContactos() {
  formulario.addEventListener("submit", agregarContacto);
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
  // variables segundarias
  const nombre = document.querySelector("#Nombre").value;
  const telefono = document.querySelector("#Telefono").value;
  const correo = document.querySelector("#Email").value;
  const identidad = document.querySelector("#identidad").value;
  const direccion = document.querySelector("#direcion").value;
  const cuidad = document.querySelector("#cuidad").value;
  // objeto para almacenar datos
  const DatosContacto = {
    id: Date.now(),
    Nombre: nombre,
    Telefono: telefono,
    Correo: correo,
    Identidad: identidad,
    Direcion: direccion,
    Cuidad: cuidad,
  };
  Contactos = [...Contactos, DatosContacto];
  mostarContacto();
  console.log(Contactos);
}

// funciones segundarias
function mostarContacto() {
  limpiarHTML();
  if (Contactos.length > 0) {
    Contactos.forEach((contacto) => {
      
      // creando  componente html
      const card = `
           <div class="card mt-5">
             <div class="card-header bg-transparent border-success text-center"><h5>${contacto.Nombre}<h5></div>
                  <div class="card-body text-success">
                    <table class="table  table-bordered">
                      <thead class="text-center">
                        <tr >
                          <th scope="col">INFORMACION</th>
                          <th scope="col">Datos</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr>
                          <th scope="row">Correo</th>
                          <td>${contacto.Correo}</td>
                        </tr>
                        <tr>
                          <th scope="row">Numero de identidad</th>
                          <td>${contacto.Identidad}</td>
                        </tr>
                        <tr>
                          <th scope="row">Telefono</th>
                          <td>${contacto.Telefono}</td>
                        </tr>
                        <tr>
                          <th scope="row">Direcion</th>
                          <td>${contacto.Direcion}</td>
                        </tr>
                        <tr>
                          <th scope="row">Cuidad</th>
                          <td>${contacto.Cuidad}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer bg-transparent border-success text-center"><a class="btn_delete"onclick="borrarLocalStoreContacto(${contacto.id})"><i class="bi bi-person-x"></i>Eliminar</a>
                  </div>
                </div>         
      `;
     const divContacto=document.createElement('div');
     divContacto.classList.add("col","col-md-8")
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
