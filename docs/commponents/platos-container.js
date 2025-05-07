class PlatosContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.allData = [];
  }

  connectedCallback() {
    this.render(); // Render inicial
  }

  setData(data) {
    this.allData = data;
    this._renderList(data);
  }

  _renderList(data) {
    const section = this.shadowRoot.querySelector('.platos');
    section.innerHTML = '';

    if (data.length === 0) {
      section.innerHTML = `<p style="color: red; font-size: 40px;">No se encontraron platos con ese nombre o país.</p>`;
      return;
    }

    data.forEach(plato => {
      const ganadoresHTML = plato.ganadores && plato.ganadores.length > 0
        ? `<ul class="lista-ganadores">` +
          plato.ganadores.slice(0, 3).map(g =>
            `<li>Temporada: ${g.temporada}, Piloto: ${g.piloto}</li>`
          ).join('') + `</ul>`
        : '<p>No hay ganadores registrados</p>';

      const platoElement = document.createElement('article');
      platoElement.classList.add('plato');
      platoElement.innerHTML = `
        <h2 class="nombre">${plato.nombre}</h2>
        <img src="${plato.imagen}" alt="Imagen de ${plato.nombre}" class="imagen-platos">
        <p class="tipo"><strong>Tipo de plato:</strong> ${plato.tipo}</p><hr>
        <p class="info"><strong>Tiempo de preparación:</strong> ${plato.tiempo_preparacion_min} mnts</p><hr>
        <p class="info"><strong>Dificultad:</strong> ${plato.dificultad}</p><hr>
        <p class="descripcion"><strong>Descripción:</strong> ${plato.descripcion}</p><hr>
        <p class="info"><strong>Ingredientes:</strong> ${plato.ingredientes.join(', ')}</p><hr>
        <p class="info"><strong>Echo por:</strong> ${plato.Echo_por}</p><br>
      `;
      platoElement.addEventListener('click', () => {
        platoElement.classList.toggle('expanded');
      });

      section.appendChild(platoElement);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .platos {
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .plato {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 1rem;
          background-color: white;
          box-shadow: 0 4px 8px rgba(223, 223, 223, 0.1);
          transition: transform 0.3s;
          color: black;
        }

        .plato:hover {
          transform: scale(1.02);
        }

        .imagen-platos {
          max-width: 100%;
          border-radius: 4px;
        }

        .expanded {
          background-color:rgb(209, 209, 209);
        }

        h2 {
          color:rgb(0, 0, 0);
        }
      </style>
      <section class="platos"></section>
    `;
  }
}

customElements.define('platos-container', PlatosContainer);
