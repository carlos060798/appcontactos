# appcontactos
aplicativo javascript de una simulacion de creaar  una agenda de contactos


<div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="row justify-content-center">
          <div class="col-8 col-md-6 col-lg-10 form_content bg-light">
            <form class="row g-3 needs-validation my-4 " id="form">
              <h3 class="text-center text-primary"> Crear Contacto</h3>
              <div class="col-12 col-md-7">
                <label for="Nombre" class="form-label">Nombres del contacto</label>
                <input type="text" class="form-control" id="Nombre" name="Nombre" required>

              </div>
              <div class=" col-12  col-md-5 ">
                <label for="Telefono" class="form-label">Telefono</label>
                <input type="number" class="form-control" id="Telefono" name="Telefono" required>
              </div>
              <div class="col-12 col-md-7">
                <label for="Email" class="form-label">Correo de contacto</label>
                <input type="text" class="form-control" id="Email" name="Email" required>

              </div>
          
              <div class=" col-12  col-md-5 ">
                <label for="Telefono" class="form-label">Numero de cedula</label>
                <input type="number" class="form-control" id="Telefono" name="Telefono" required>
              </div>
              <div class=" col-12  col-md-7">
                <label for="Telefono" class="form-label">Direcion</label>
                <input type="number" class="form-control" id="Telefono" name="Telefono" required>
              </div>
              <div class="col-12  col-md-5 ">
                <label for="Tipodecontacto" class="form-label">Cuidad</label>
                <select class="form-select" id="Tipocontacto" name="Tipocontacto" required>
                  <option></option>
                  <option value="Favorito">Favorito</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div class="col-12  d-flex justify-content-center  ">
                <button class="btn btn-primary mx-4 opacity-50" id="btn" disabled>Guardar</button>
                <button type="reset" class="btn btn-danger " id="reset">Nuevo</button>
              </div>
          </div>

          </form>

        </div>
      </div>
      <div class="col-12 col-lg-8">

        <div class="row bg-light mt-5">
          <h2 class="text-center text-primary"> Contactos Favoritos</h2>
          <table class="table bg-light table-bordered">
            <thead>
              <tr class="text-center">
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody id="lista-favoritos">
            </tbody>
          </table>

        </div>
        <div class="row bg-light mt-5">
          <h2 class="text-center text-primary"> Contactos Generales</h2>
          <table class="table table-bordered bg-light ">
            <thead>
              <tr class="text-center">
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody id="lista-generales">
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
  </div>
  </div>