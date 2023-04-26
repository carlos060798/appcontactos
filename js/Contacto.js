


class Contactos{
  // clase padre

 constructor(nombre,correo,telefono){
  this._nombre = nombre;
  this._correo = correo;
  this._telefono = telefono
  
 }

 set nombre(nombre){
    this._nombre = nombre;
 }

 get nombre(){
  return this._nombre;
 } 

 set correo(correo){
this._correo = correo;
 }
 get correo(){
 return this._correo;
 }
 set telefono(telefono){
 this._telefono = telefono;
 }

 get telefono(){
  return this._telefono;
 }

}

class Favorito extends Contactos{
   static idfavorito=0;

   constructor(nombre,correo,telefono){
     super(nombre,correo,telefono)
     this._id=++ Favorito.idfavorito; // crear id unico por creacion de elementos
   }
  
   get id(){
     return this._id;
   }  
}


class General extends Contactos{
   static idgeneral=0;

   constructor(nombre,correo,telefono){
     super(nombre,correo,telefono)
     this._id=++ Favorito.idfavorito; // crear id unico por creacion de elementos
   }
  
   get id(){
     return this._id;
   }  

}