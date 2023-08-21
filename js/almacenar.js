function showList(arr) {
  const contenedorElement = document.getElementById("contenedor");
  contenedorElement.innerHTML = "";
  arr.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    contenedorElement.appendChild(li);
  });
}

function guardarArr(arr) {
  localStorage.setItem("data", JSON.stringify(arr));
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("item");
  const buttonAgregar = document.getElementById("agregar");
  const botonLimpiar = document.getElementById("limpiar");

  let lista = JSON.parse(localStorage.getItem("data")) || [];
  showList(lista);

  buttonAgregar.addEventListener("click", () => {
    lista.push(inputElement.value);
    showList(lista);
    guardarArr(lista);
  });

  botonLimpiar.addEventListener("click", () => {
    localStorage.removeItem("data");
    lista = [];
    showList(lista);
  });
});
