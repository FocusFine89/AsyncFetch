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
  img.setAttribute("src", "");
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
  btnDelete.classList.add("btn", "btn-danger");
  btnDelete.innerText = "Scarta";
  cardBody2.appendChild(btnDelete);

  //   aggiungo i dati all'interno della card
  h5.innerText = cardTitle;
  p.innerText = "Codice asin: " + asin;
  liPrice.innerText = price;
  liCategory.innerText = category;

  //   aggiungo tutto al container
  divCol.appendChild(div);
  row.appendChild(divCol);
  div.appendChild(cardBody2);
};

const fetchCharacters = () => {
  fetch("https://striveschool-api.herokuapp.com/books");
};
