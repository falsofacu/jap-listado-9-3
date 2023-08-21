function actualizarLista(arr) {
  const contenedorElement = document.getElementById("contenedor");
  contenedorElement.innerHTML = "";
  arr.forEach((element) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(element));
    contenedorElement.appendChild(li);
  });
}

function guardarArr(arr) {
  localStorage.setItem("data", JSON.stringify(arr));
}

function agregarElemento(arr, valor) {
  arr.push(valor);
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("item");
  const buttonAgregar = document.getElementById("agregar");
  const botonLimpiar = document.getElementById("limpiar");

  let lista = JSON.parse(localStorage.getItem("data")) || [];
  actualizarLista(lista);

  buttonAgregar.addEventListener("click", () => {
    agregarElemento(lista, inputElement.value)
    actualizarLista(lista);
    guardarArr(lista);
  });

  botonLimpiar.addEventListener("click", () => {
    localStorage.removeItem("data");
    lista = [];
    actualizarLista(lista);
  });
});
