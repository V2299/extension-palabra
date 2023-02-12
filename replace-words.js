// Crear una función que reemplace las palabras "ceviche" y "pisco" por "ceviche peruano" y "pisco peruano", respectivamente
function replaceWords(text) {
    return text.replace(/ceviche/g, 'ceviche peruano').replace(/pisco/g, 'pisco peruano');
  }
  
  // Crear un observer que escuche cualquier cambio en el contenido de la página
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length) {
        // Si hay nodos nuevos, buscar todas las etiquetas de texto (p, h1, span, etc.)
        Array.from(mutation.addedNodes).forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE) {
            // Si el nodo es de tipo texto, reemplazar las palabras
            node.textContent = replaceWords(node.textContent);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Si el nodo es un elemento, buscar todas sus etiquetas de texto hijas y reemplazar las palabras
            Array.from(node.querySelectorAll('*')).forEach(function (el) {
              el.textContent = replaceWords(el.textContent);
            });
          }
        });
      }
    });
  });
  
  // Configurar el observer para que observe toda la página y se active inmediatamente
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  