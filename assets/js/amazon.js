const nomeProdotto = document.getElementById("nomeProdotto");
const nomeBrand = document.getElementById("nomeBrand");
const prezzo = document.getElementById("Prezzo");
const URLImg = document.getElementById("URLImg");
const descrizioneProdotto = document.getElementById("descrizioneProdotto");
const btnSave = document.getElementById("btnSave");
const btnReset = document.getElementById("btnReset");
const btnDelete = document.getElementById("btnDelete");
const myForm = document.getElementById("myform");

let URLAddress = "https://striveschool-api.herokuapp.com/api/product/";
let URLKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmQwYmQyMjA3MTAwMTVkZTJmNDkiLCJpYXQiOjE3MzQwODE4MDMsImV4cCI6MTczNTI5MTQwM30.MvVYRlpAb2dnmbpT8SinCgKVFIUyMWtby-iyl0Y_a84";

class product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

let newProduct;

btnSave.addEventListener("click", function (e) {
  e.preventDefault();
  newProduct = new product(
    nomeProdotto.value,
    descrizioneProdotto.value,
    nomeBrand.value,
    URLImg.value,
    parseInt(prezzo.value)
  );
  insert();
  resetForm();
  extract();
});
btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  resetForm();
});

function resetForm() {
  document.getElementById("myform").reset();
}

/*document.addEventListener('load', init());

function init() {
    
}*/

//function displayDelete(){
//    if url
//}

let arrayProdotti;

function insert() {
  fetch(URLAddress, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization: URLKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("it's ok");
      } else {
        console.log("no");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function extract() {
  fetch(URLAddress, {
    method: "GET",
    headers: {
      Authorization: URLKey,
    },
  })
    .then((ress) => {
      console.log(ress);
      return ress.json();
    })
    .then((data) => {
      arrayProdotti = data;
      console.log(arrayProdotti);
      for (let i = 0; i < arrayProdotti.length; i++) {
        index = arrayProdotti[0]._id;
      }
      console.log(index);
    })
    .catch((err) => {
      console.log(err);
    });
}
let index;
btnDelete.addEventListener("click", function (e) {
  e.preventDefault();
 cancella();
});

function cancella(){
    fetch(URLAddress+index, {
        method: "DELETE",
        headers: {
            Authorization: URLKey,
          },
    })
    .then((ress) => {
        return ress.json();
      })
    .then((data) => {
        arrayProdotti = data;
        console.log(arrayProdotti);
      })
      .catch((err) => {
        console.log(err);
      });
}