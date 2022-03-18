const tabs = document.querySelectorAll(".tab");

fetch(
  'https://parallelum.com.br/fipe/api/v1/carros/marcas'
)
  .then((response) => response.json())
  .then((data) => {
    tabs = data;
  });