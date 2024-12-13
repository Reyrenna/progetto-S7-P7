const nomeProdotto = document.getElementById("nomeProdotto");
const nomeBrand = document.getElementById("nomeBrand");
const Prezzo = document.getElementById("Prezzo");
const URLImg = document.getElementById("URLImg");
const descrizioneProdotto = document.getElementById("descrizioneProdotto");
const btnSave = document.getElementById("btnSave");
const btnReset = document.getElementById("btnReset");
const btnDelete = document.getElementById("btnDelete");

let URL = "https://striveschool-api.herokuapp.com/api/product/";
let URLKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmQwYmQyMjA3MTAwMTVkZTJmNDkiLCJpYXQiOjE3MzQwODE4MDMsImV4cCI6MTczNTI5MTQwM30.MvVYRlpAb2dnmbpT8SinCgKVFIUyMWtby-iyl0Y_a84";

class Products {
  constructor(_name, _description, _brand, _imageUrl, _price, _id) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imgageUrl = _imageUrl;
    this.price = _price;
    this._id = _id;
  }
}

/*document.addEventListener('load', init());

function init() {
    
}*/

let arrayProdotti = [];

async function prodotto() {
  try {
    let respons = await fetch(URL, {
      Headers: {
        Authentication: "URLKey",
      },
    });
    let response = await read.json();
    arrayProdotti = response;
  } catch (error) {
    console.log("Errore nel recupero dei dati: ", error);
    empty.innerText = `Errore nel recupero dei dati: ${error}`;
  }
}
