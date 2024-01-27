/* Se acomodo un poco el documento JAVASCRIPT */

const baseEndpoint = 'https://api.github.com';

const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name'); // Se agrego '.' ya que hablamos de clase en el .html

const $b = document.querySelector('.blog'); // Se cambio '#' por '.' ya que hablamos de clase en el .html

const $l = document.querySelector('.location');

async function displayUser(username) { // Se agregó un 'async' a la funcion ya que se estaba utilizando dentro de ella.

  $n.textContent = 'cargando...';

  try { // Se agregó un 'try' para darle seguimiento a la función

    const response = await fetch(`${usersEndpoint}/${username}`);

    const data = await response.json(); // Se agregó esta respuesta para generarla en datos '.json'

    console.log(data);

    $n.textContent = `${data.name}`;

    $b.textContent = `${data.blog}`;

    $l.textContent = `${data.location}`;

  } catch (err) {

    handleError(err);

  }

}

function handleError(err) {

  console.log('OH NO!');

  console.log(err);

  $n.textContent = `Algo salió mal: ${err}`;

}

displayUser('stolinski').catch(handleError);