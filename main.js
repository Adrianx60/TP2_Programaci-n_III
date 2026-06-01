// --- Lógica para listado.html ---
if (document.getElementById('lista-items')) {
  const productos = [
    { nombre: "Frutos Secos Mix Tropical", categoria: "frutos secos", desc: "Maní, almendras, nueces, pasas, banana, papaya, ananá.", precio: "$10.000 el kg" },
    { nombre: "Mix Semillas", categoria: "semillas", desc: "Girasol, sésamo blanco, lino y chía.", precio: "$6.500 el kg" },
    { nombre: "Granola", categoria: "cereal", desc: "Avena, lino, quinoa pop, girasol, maíz, pasas, arroz inflado y miel.", precio: "$6.000 el kg" },
    { nombre: "Maní sabor pizza", categoria: "maní", desc: "Maní tostado sabor pizza.", precio: "$5.000 el kg" },
    { nombre: "Maní sabor salame", categoria: "maní", desc: "Maní tostado sabor salame.", precio: "$5.000 el kg" },
    { nombre: "Maní sabor jamón", categoria: "maní", desc: "Maní tostado sabor jamón.", precio: "$5.000 el kg" },
    { nombre: "Maní sin sal", categoria: "maní", desc: "Maní natural sin sal.", precio: "$5.000 el kg" },
    { nombre: "Tutucas", categoria: "snack dulce", desc: "Copos inflados dulces y crocantes.", precio: "$5.000 el kg" },
    { nombre: "Palitos Salados", categoria: "snack salado", desc: "Snacks crocantes con sal.", precio: "$7.000 el kg" },
    { nombre: "Pistachos", categoria: "frutos secos", desc: "Pistachos seleccionados.", precio: "$4.900 los 100 gr" },
    { nombre: "Almendras", categoria: "frutos secos", desc: "Almendras naturales.", precio: "$2.800 los 100 gr" },
    { nombre: "Nuez Mariposa Chandler", categoria: "frutos secos", desc: "Nuez variedad Chandler.", precio: "$2.500 los 100 gr" }
  ];

  function renderizar(lista) {
    const listaItems = document.getElementById("lista-items");
    listaItems.innerHTML = "";
    lista.forEach(function(el) {
      const div = document.createElement("div");
      div.classList.add("item-card");
      div.innerHTML = `${el.nombre}<br>${el.precio}`;
      listaItems.appendChild(div);
    });
  }

  document.getElementById("btn-todos").addEventListener("click", function() {
    renderizar(productos);
  });

  document.getElementById("btn-frutas").addEventListener("click", function() {
    const filtrados = productos.filter(function(el) { return el.categoria === "frutos secos"; });
    renderizar(filtrados);
  });

  renderizar(productos);
}

// --- Lógica para index.html ---
if (document.getElementById('btn-contar')) {
  const productos = [
    { nombre: "Frutos Secos Mix Tropical", stock: 12 },
    { nombre: "Mix Semillas", stock: 8 },
    { nombre: "Granola", stock: 15 },
    { nombre: "Maní sabor pizza", stock: 20 },
    { nombre: "Maní sabor salame", stock: 10 },
    { nombre: "Maní sabor jamón", stock: 7 },
    { nombre: "Maní sin sal", stock: 9 },
    { nombre: "Tutucas", stock: 6 },
    { nombre: "Palitos Salados", stock: 11 },
    { nombre: "Pistachos", stock: 5 },
    { nombre: "Almendras", stock: 14 },
    { nombre: "Nuez Mariposa Chandler", stock: 13 }
  ];

  const btnContar = document.getElementById("btn-contar");
  const resultado = document.getElementById("contador-resultado");
  let mostrando = false;

  btnContar.addEventListener("click", function() {
    if (!mostrando) {
      resultado.innerHTML = "";
      productos.forEach(el => {
        const p = document.createElement("p");
        p.textContent = `${el.nombre}: ${el.stock} kg disponibles`;
        resultado.appendChild(p);
      });

      const total = productos.reduce((acc, el) => acc + el.stock, 0);
      const totalP = document.createElement("p");
      totalP.innerHTML = `<strong>Total: ${total} kg disponibles</strong>`;
      resultado.appendChild(totalP);

      resultado.style.display = "block";
      btnContar.textContent = "Ocultar listado";
      mostrando = true;
    } else {
      resultado.style.display = "none";
      btnContar.textContent = "¿Cuántos snacks hay?";
      mostrando = false;
    }
  });
}

// --- Lógica para destacados.html ---
if (document.getElementById('tarjetas-container')) {
  const destacados = [
    { titulo: "Granola Casera", desc: "Mezcla de avena, miel y frutos secos." },
    { titulo: "Mix Tropical", desc: "Frutas deshidratadas y semillas." },
    { titulo: "Maní Salado", desc: "Clásico snack crocante." },
    { titulo: "Tutucas Dulces", desc: "Copos inflados con azúcar." }
  ];

  const contenedor = document.getElementById("tarjetas-container");
  const contador = document.getElementById("contador-seleccionadas");

  destacados.forEach((item) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("item-card");
    tarjeta.innerHTML = `<h3>${item.titulo}</h3><p>${item.desc}</p>`;
    contenedor.appendChild(tarjeta);

    // Al hacer clic, alternar selección/deselección
    tarjeta.addEventListener("click", () => {
      tarjeta.classList.toggle("seleccionada");
      actualizarContador();
    });
  });

  function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".seleccionada").length;
    contador.textContent = `${seleccionadas} tarjeta/s seleccionada/s.`;
  }
}

