// reset

const resetElement = query('.button__reset');
const paletteDefault = query('#cold');

// función para poner todos las tareas a no completadas
// esta función debe modificar los datos y después pintar y escuchar eventos
function reset(ev) {
  resetTwitter();
  // prevengo la acción por defecto
  ev.preventDefault();
  // recorro todas las tareas
  for (const input of formInputs) {
    // para cada tarea pongo su propiedad complete a false
    input.value = '';
    // fileField.value = null;
    profileImage.style = ''; //anula la imagen grande preview
    profilePreview.style = ''; //anula la imagen pequeña
    changeToCold(); //cambia css
    paletteDefault.checked = true; //cambia checked a pallete cold css
    formData.palette = 1; //cambia value

    renderUserName.innerHTML = 'Jeanne Baret';

    renderUserJob.innerHTML = 'Botánica';
  }

  resetFrame();
  localStorage.removeItem('frame');

  localStorage.removeItem('data');
  localStorage.removeItem('photo');
  localStorage.removeItem('color');
}

resetElement.addEventListener('click', reset);
