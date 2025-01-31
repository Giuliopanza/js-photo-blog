/*CONSEGNA
Milestone 1
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


/*CONSEGNA
Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, 
isponiamo un’immagine qualunque ed un button di chiusura.
Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata,
dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:*/

const row = document.querySelector(`.row`)

let container = document.querySelector(`.cont`)


fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })

.then(response => response.json())

.then(data => {
    
    console.log(data)

    let arraycol = []

    data.forEach(element => { 

         row.innerHTML += `
         <div class="col-lg-3 col-md-5 col-sm-12 m-2 p-2 bg-white position-relative" data-id="${element.id}">
             <img src="./img/pin.svg" alt="immagine" class="position-absolute top-0 start-50 translate-middle">
             <img src="${element.url}" alt="immagine" id="imgcard">
             <h3>${element.title}</h3>
             <span>${element.date}</span>
         </div>`
         arraycol = document.querySelectorAll(`.col-lg-3`)

    });

    console.log(`${arraycol}`)

    arraycol.forEach(element =>{

        element.addEventListener('click',function (){

            container.innerHTML =`
                <div class="position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center flex-column">
                    <img src="https://marcolanci.it/boolean/assets/pictures/${element.getAttribute(`data-id`)}.png" alt="immagine" id="imgover" class="m-2">
                   <input type="reset" value="Chiudi" id="chiudi">
                </div>`

                container.classList.remove("d-none")

                let btn = document.getElementById(`chiudi`)

                btn.addEventListener('click',function (){

                    container.classList.add("d-none")

                console.log(`ciao`)
                })
         })
     })
})
.catch(error => {

    console.error(error);

});

/*
Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, 
l tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
*/

/*stringa.addEventListener( "mouseover", () => {
    // stringa.style.color = "red"

    if( stringa.classList == "text-danger" ){
        stringa.classList.remove("text-danger")
    } else {
        stringa.classList.add("text-danger")
    }

} )*/




