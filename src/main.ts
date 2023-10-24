import fetch from 'node-fetch';
import axios from 'axios';

// URLs
// Frases 	https://api.adviceslip.com/advice
// Rick and Morty https://rickandmortyapi.com/api/character/174
// Traduções https://api.funtranslations.com/translate/

//Frases motivacionais 

async function buscarFrasesComFetch() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const dados = await response.json()
    console.log(dados)
}

async function buscarFrasesComAxios() {
    const response = await axios.get('https://api.adviceslip.com/advice')
    console.log(response.data)
}

// Rick and Morty

async function buscarApiComFetch() {
    const response = await fetch('https://api.adviceslip.com/advice/174')
    const dados = await response.json()
    console.log(dados)
}

async function buscarApiComAxios() {
    const id = 174
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(response.data)
}

// Traduções Api

// async function traducaoFrasesComFetch() {
//     const body = {text: 'Hello World'}

//     const response = await fetch('https://api.funtranslations.com/translate/yoda.json',{
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: { 'Content-Type': 'aplication/json' }
//     })
//     const data = await response.json()
//     console.log(data)
// }


async function traducaoFrasesComAxios() {
    const body = {text: 'Hello World'}

    const response = await axios.post('https://api.funtranslations.com/translate/yoda', body)
    console.log(response.data)
}

// traducaoFrasesComAxios()
// traducaoFrasesComFetch()
// buscarFrasesComFetch()
// buscarFrasesComAxios()
// buscarApiComAxios()
// buscarApiComFetch()
