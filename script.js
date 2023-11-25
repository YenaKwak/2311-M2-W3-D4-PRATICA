//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro


// let changeTitle = document.getElementById("site_title");
// changeTitle.innerText = "SONOYENA";

function changeTitle(newTitle) {
    // document.querySelector('h1') selects the first <h1> tag on the page
    let h1Element = document.querySelector("h1");

    // If the <h1> tag exists, change its content
    if (h1Element) {
        h1Element.textContent = newTitle;
    } else {
    }
}

// Call the function with the new title
changeTitle("SONOYENA");



// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

// let changeBackgroundColor = document.body;
// changeBackgroundColor.style.backgroundColor = '#FFF0FF'; 

function backgroundColoBody(changedColor){
    document.body.style.backgroundColor = changedColor;
}
backgroundColoBody('#FFF0FF');





// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress(addressFuture) {

    let AddressElement = document.getElementById("my_address");

    if (AddressElement) {
        AddressElement.textContent = addressFuture;
    } else {

    }
}

changeAddress("Busan, Korea");



// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addClassToLinks() {
// Select all <a> tags in the table
let linksInTable = document.querySelectorAll("#the_table a");
    
// Loop through each <a> tag
linksInTable.forEach(function(link) {
    // Add the 'link_amazon' class to each <a> tag
    link.classList.add("link_amazon");

    // Print a log to check the classes added to the console
    console.log(link);
});

}
// function call
addClassToLinks();




// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function toggleImageVisibility() {
    let imagesInTable = document.querySelectorAll('#the_table img');

    imagesInTable.forEach(function(image) {
        image.classList.toggle('hidden');
    });
}
toggleImageVisibility();






// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor() {
    let priceElements = document.querySelectorAll('#the_table .price');

    let colors = ['red', 'blue', 'green', 'purple', 'orange'];

    priceElements.forEach(function (priceElement) {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        priceElement.style.color = randomColor;
    });
}

