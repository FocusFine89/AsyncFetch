// DICHIARAZIONI GENERALI
const main = document.querySelector("main");
const container = document.getElementById("container");
const row = document.getElementById("row");

const generateCard = (cardTitle, imgUrl, price, category, asin) => {
  // creo una col dove andrà tutto
  const divCol = document.createElement("div");
  divCol.classList.add("col-12", "col-md-4", "col-lg-3", "m-3");

  // creo un div con classe card
  const div = document.createElement("div");
  div.classList.add("card");
  // creo un img, ci aggiungo gli attributi e lo inserisco all'interno del div card
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  div.appendChild(img);
  //   creo un div con classe card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  div.appendChild(cardBody);

  const ul = document.createElement("ul");
  const liPrice = document.createElement("li");
  const liCategory = document.createElement("li");
  div.appendChild(liPrice);
  div.appendChild(liCategory);

  const cardBody2 = document.createElement("div");
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mt-3");
  btnDelete.innerText = "Scarta";
  cardBody2.appendChild(btnDelete);

  //   aggiungo i dati all'interno della card
  h5.innerText = cardTitle;
  p.innerText = "Codice asin: " + asin;
  liPrice.innerText = `Prezzo: ${price} euro`;
  liCategory.innerText = "Categoria: " + category;

  //   aggiungo tutto al container
  divCol.appendChild(div);
  row.appendChild(divCol);
  div.appendChild(cardBody2);
};

const fetchCharacters = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 400) {
          throw new Error("Bad Request");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        if (response.status === 403) {
          throw new Error("Forbidden");
        }
        if (response.status === 404) {
          throw new Error("Not Found");
        }
        if (response.status === 500) {
          throw new Error("Server Error");
        }

        throw new Error("Generic Fetch Error");
      }
    })

    .then((libraryData) => {
      console.log(libraryData);
      //   qui dentro andrà tutto il codice per prendere gli elementi dell'api
      libraryData.forEach((libro) => {
        generateCard(
          libro.title,
          libro.img,
          libro.price,
          libro.category,
          libro.asin
        );
      });
    })
    .catch((error) => console.log(error));
};

fetchCharacters();
