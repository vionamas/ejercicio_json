// try {
  fetch("alumnos.json")
  .then(res => {
    if (res.ok) {
      console.log('response.ok ', res.ok);
      return res.json()
    } else {
      throw new Error(res.status);
    }
  })
  .then(data => {
    console.log(data)
    const clase = data;

    document.querySelector('#curso').innerHTML =
      `${clase.curso} ${clase.fecha_inicio} Localidad: ${clase.lugar}`;

    document.querySelector('#tutor').innerHTML =
      `<h2>Tutor</h2> ${ficha_persona(clase.tutor)}`;

    let talumnos = '';
    for (const item of clase.alumnos) {
      talumnos += '<article>';
      talumnos += ficha_persona(item);
      talumnos += evolucion(item)
      talumnos += '</article>';

    }
    document.querySelector('#alumnos').innerHTML = talumnos;
  })
  .catch(err => {
    console.error("ERROR: ", err.message)
  });


  function ficha_persona(persona) {
    const ficha = `<div class="alumno">
      <div class="alumno-info">
        <ul>
          <li>Nombre: ${persona.Nombre}</li>
          <li>Email: ${persona.email}</li>
          <li>Linked: <a href="${persona.linked}" target="_blank">${persona.linked}</a></li>
          <li>Github: <a href="${persona.github}" target="_blank">${persona.github}</a></li>
        </ul>
      </div>
      <div class="alumno-evolucion">
        ${evolucion(persona)}
      </div>
    </div>`;
  
    return ficha;
  }
  
function evolucion(persona) {
  let evolucion = '<table><tr><th>Materia</th><th>Inicio</th><th>Fin</th></tr>'
  for (let i in persona.inicio) {
    evolucion += `<tr><td>${i}</td><td>${persona.inicio[i]}</td>
    <td class="${persona.inicio[i] > persona.fin[i] ? 'negativo' : 'positivo'}">${persona.fin[i]}</td></tr>`
  }
  evolucion += '</table>'
  return evolucion
}