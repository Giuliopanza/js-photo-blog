/*Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra
ed il titolo abbia una dimensione adeguata */

const row = document.querySelector(`.row`)

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
.then(response => response.json())
.then(data => {
    // codice per far qualcosa con la risposta
    
    console.log(data)
        data.forEach(element => {
    
            row.innerHTML += `
            <div class="col-lg-3 col-md-5 col-sm-12 m-2 p-2 bg-white">
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn1"></button>
                </div>
                <img src="${element.url}" alt="immagine">
                <h3>${element.title}</h3>
                <span>${element.date}</span>
            </div>`
            
        });

})
.catch(error => {
    // codice da eseguire in caso di errore
    console.error(error);
});




