let eventos = []

async function obtenerEventos() {
  await axios.get("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => {
      eventos = response.data.events
      console.log(eventos);

    })

    .catch((err) => {
      console.log(("Error: " + err.message));
    })


  mostrarEventos(eventos)

  //Checkboxes
  checkFood.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = Checkbox(events, "Food")
      mostrarEventos(arrayFiltrado)
    } else {
      mostrarEventos(events)
    }
  })

  checkBook.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Books")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })

  checkMuseum.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Museum")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })



  checkConcert.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Concert")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })


  checkRace.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Race")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })

  checkCinema.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Cinema")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })


  checkParty.addEventListener("change", function () {
    if (this.checked) {
      let arrayFiltrado = checkbox(events, "Party")
      mostrarEventos(arrayFiltrado)

    } else {
      mostrarEventos(events)
    }
  })
  btnBuscar.addEventListener("click", () => {
    let evento = inputBuscar.value
    let eventoBuscado = events.filter((nombre) => nombre.name.toLowerCase)
    if (eventoBuscado.length === 0) {
      mostrarEventos(events);
    } else {
      mostrarEventos(eventoBuscado)
    }

  }

  )

  function mostrarEventos(array) {

 
    


  }

  
  function checkbox(array, valor) {
    return array.filter(function (categoria) {
      returncategoria.category === valor
    }

    )
  }


}
obtenerEventos()
mostrarEventos()

















//----------------------- Boton previus y next-------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const viewName = document.getElementById('view-name');
  const prevButton = document.getElementById('prev-view');
  const nextButton = document.getElementById('next-view');

  const views = ['Home', 'Upcoming Events', 'Past Events', 'Contact', 'Stats'];
  let currentViewIndex = 0;

  function updateViewName() {
    viewName.textContent = views[currentViewIndex];
  }

  prevButton.addEventListener('click', () => {
    if (currentViewIndex > 0) {
      currentViewIndex--;
      updateViewName();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentViewIndex < views.length - 1) {
      currentViewIndex++;
      updateViewName();
    }
  });
});

//-----------------------End Boton previus y next-------------------------------------

