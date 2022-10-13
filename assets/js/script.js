let pokemons;

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151').then(
    (httpResponse) => {
        console.log("Fine della richiesta, ecco la risposta HTTP")
        console.log(httpResponse)

        httpResponse.json().then((responseText) => {
            console.log(responseText)
        })
    })