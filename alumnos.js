fetch('alumnos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    return response.json();
  })
  .then(data => {
    // Obtén una referencia al elemento <div> con el id "resultado"
    const resultadoDiv = document.getElementById('resultado');

    // Crea elementos HTML para representar los datos
    const ul = document.createElement('ul');
    
    // Recorre los elementos del objeto JSON y crea elementos <li> para cada uno
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${data[key]}`;
        ul.appendChild(li);
      }
    }

    // Agrega la lista al elemento <div> de resultado
    resultadoDiv.appendChild(ul);
  })
  .catch(error => {
    console.error('Error:', error);
  });
