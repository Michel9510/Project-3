const textBox = document.querySelector(".text-box");
const firstBtn = document.querySelector("#tag1");
const secondBtn = document.querySelector("#tag2");
const thirdBtn = document.querySelector("#tag3");
const fourthBtn = document.querySelector("#tag4");
const fifthBtn = document.querySelector("#tag5");

let htmlDivs;

fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/")
  .then((response) => response.json())
  .then(({ data }) => {

    let facts = data.map((anime) => {
      return anime.text
    });

    renderAnime(facts)
  });
//link for the photos array.
function renderAnime(facts) {
  let animePics = [
    "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg"
  ];

  htmlDivs = facts.map((fact, index) => {
    const animeDisplay = `
      <div>
        <img src=${animePics[index]} alt="anime model">
        <h3>${fact}</h3>
      </div>
    `;

    return animeDisplay;
  });

  textBox.insertAdjacentHTML("beforeend", htmlDivs[0]);
}

console.log(htmlDivs);
//Anime Btns
firstBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[0]);
});

secondBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[1]);
});

thirdBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[2]);
});

fourthBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[3]);
});

fifthBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[4]);
});

// function that removes all elements inside of a container
function removePrevious(result) {
  while (result.lastChild) {
    result.removeChild(result.lastChild);
  }
}
