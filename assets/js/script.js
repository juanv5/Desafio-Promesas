// Creacion de la funcion asincrona

const mostrarTitulos = async() => {
    const url = "https://jsonplaceholder.typicode.com/photos"

    //metodo fetch dentro del bloque Try/Catch, mediante instruccion await creamos el valor de la promesa
    return new Promise(async(resolve) => {
        try {
            await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const listaDeTitulos = data
                        .filter((d) => d.id < 21)
                        .map((d) => d.title)
                    resolve(listaDeTitulos)
                })
        } catch (error) {
            console.log(error)
        }
    })
}

// Creacion de la funcion que retorna la promesa despues de 3 segundos, utilizando setTimeout
const getMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Informacion enviada")
        }, 3000)
    })
}

// Creacion de la funcion asincrona que recibe el mensaje de la promesa

const llamadaFunciones = async() => {
    const titulos = await mostrarTitulos()
    const resp = await getMensaje()
    titulos.forEach(dataTitulos => console.log(dataTitulos))
    console.log(resp)
}

console.log("Desafío - Promesas")
console.log("")


llamadaFunciones()