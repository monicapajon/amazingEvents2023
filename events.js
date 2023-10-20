
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
  
  