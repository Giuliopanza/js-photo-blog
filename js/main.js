const ul = document.getElementById(`list`)

for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        console.log(data.response);
        ul.innerHTML += `<li>${data.response}</li>`

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });    
}

