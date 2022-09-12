const saludo = "hola mundo"

const peso =55
const altura =1.62

const imc = peso / (altura * altura)
//const imc = peso / match.pow(altura, 2)
//indece de masa corporal

let persona = {
    nombre: "scarlet",
    apellido: "alfaro",
    peso: 55,

}
persona.nombrecompleto = persona.nombre + " " + persona.apellido

console.log(persona)
document.write(persona.nombre,persona.apellido)

//---

 const div = document.getElementById("identificador")
 
 div.innerHTML ="imc"


const calcularimc = () => {
    const pesoinput = document.getElementById("peso")
    const estaturainput = document.getElementById("estatura")

    const peso = Number(pesoinput.value)
    const estatura =Number(estaturainput.value) / 100

    const imc = peso / (estatura * estatura)
    const div = document.getElementById("identificador")
    div.innerHTML = `
     <p>tu imc es: ${imc}</p>
    `
}



