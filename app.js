

// variables  globales
const btn = document.getElementById("btn");
const Listafavoritos = document.getElementById('lista-favoritos')
const ListaGenerales = document.getElementById('lista-generales')

btn.addEventListener("click", agregarContacto);

const ContactosFavoritos = []
const ContactosGenerales = []


// funciones principales

function agregarContacto(e) {
  e.preventDefault();

  let formulario = document.forms['form'];
  let nombreContacto = formulario['Nombre']
  let emailContacto = formulario['Email']
  let telefonoContacto = formulario['Telefono']
  let tipodeContacto = formulario['Tipocontacto']

  if (tipodeContacto.value === 'Favorito') {
    ContactosFavoritos.push(new Favorito(nombreContacto.value,
      emailContacto.value,
      telefonoContacto.value,))
    cargarContactoFavorito()
  } else if (tipodeContacto.value === 'General') {
    ContactosGenerales.push(new General(nombreContacto.value,
      emailContacto.value,
      telefonoContacto.value,))
    cargarContactoGeneral()
  }


}


// funciones auxiliares
function cargarContactoFavorito() {
  let contactofavorito = '';
  for (let favorito of ContactosFavoritos) {
    contactofavorito += contactoFavorito(favorito);
  }
  Listafavoritos.innerHTML = contactofavorito;
}

function cargarContactoGeneral() {
  let contactogeneral = '';
  for (let general of ContactosGenerales) {
    contactogeneral += contactoGeneral(general);
  }
  ListaGenerales.innerHTML = contactogeneral;
}




function contactoFavorito(Favorito) {
 let contactofavorito=`<tr>
 <td>${Favorito.nombre}</td>
 <td>  ${Favorito.correo}</td>   
 <td>${Favorito.telefono}</td>
 <td> <button class="btn_delete" onclick="eliminarFavorito(${Favorito.id})">x</button></td>
</tr>`
  return contactofavorito;
}

function contactoGeneral(General) {
  let contactogeneral = `<tr>
  <td>${General.nombre}</td>
  <td>  ${General.correo}</td>   
  <td>${General.telefono}</td>
  <td> <button class="btn_delete" onclick="eliminarGeneral(${General.id})">x</button></td>
 </tr>`
  
  return contactogeneral;
}

// eliminar  contactos
function eliminarFavorito(id){
  let indice= ContactosFavoritos.findIndex(favorito=> favorito.id=== id)
  ContactosFavoritos.splice(indice,1) // elimina el elemento
   
   cargarContactoFavorito()
 } 
 
 function eliminarGeneral(id){
    let contacto=ContactosGenerales.findIndex(general=> general.id=== id)
     ContactosGenerales.splice(contacto,1) // elimina el elemento
     cargarContactoGeneral()
   }
 