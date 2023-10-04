/* 
* AL parecer el script es para mostrar los datos de un usuario de github
* Mientras consigue la información, debe mostrar el mensaje "cargando..."
*/


const baseEndpoint = 'https://api.github.com/users'; //este es el endpoint de la api de github
// const usersEndpoint = `${baseEndpoint}/users`; //este es el endpoint para usarlo posteriormente en la funcion y concatenar el perfil del usuario que necesitamos. lo comenté para refactorizarlo arriba
const $n = document.querySelector('#name'); //seleccionamos el elemento con el id="name"
const $b = document.querySelector('#blog'); //seleccionamos el elemento con el id="blog"
const $l = document.querySelector('#location'); //cambiamos el . por # para seleccionar el elemento con el id="location"

async function displayUser(username) {/* Agregué async para poder usar await dentro de la función */
  $n.textContent = 'cargando...'; /* Mensaje de cargando mientas hace la conexión */
  $b.textContent = 'cargando...'; /* Mensaje de cargando mientas hace la conexión */
  $l.textContent = 'cargando...'; /* Mensaje de cargando mientas hace la conexión */
  /* Se quitó la variable resultado para */
  await fetch(`${baseEndpoint}/${username}`) //se hace la conexion con el endpoint y el perfil del usuario

    .then((resultado) => { //se hace la promesa de que si la conexion es exitosa, se ejecuta el siguiente codigo
      console.log(resultado);
      return resultado.json();//se convierte la respuesta en un objeto json
    })
    .then((data) => { //se hace la promesa de que si la respuesta es un objeto json, se ejecuta el siguiente codigo
      console.log(data); //se imprime en consola el objeto json
      /* `${data.name}` no estaba funcionando porque tiene comillas simples en vez de esta cosa ` */
      $n.textContent = `${data.name}`; //se cambia el contenido del elemento con el id="name" por el nombre del usuario
      $b.textContent = `${data.blog}`; //se cambia el contenido del elemento con el id="blog" por el blog del usuario
      $l.textContent = `${data.location}`; //se cambia el contenido del elemento con el id="location" por la ubicacion del usuario
    })
    .catch((err) => { //si hay un error en la conexion, se ejecuta el siguiente código
      console.log('OH NO!');
      console.log(err);
      $n.textContent = `Algo salió mal: ${err}`
    })
    ;


}

function handleError(err) {//esta funcion se ejecuta si hay un error en la conexion
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); //se ejecuta la funcion displayUser con el parametro del usuario que queremos mostrar