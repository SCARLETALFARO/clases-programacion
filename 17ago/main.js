
const calcular = () => {
    //"1+100"
    const formulainput = document.getElementById('formula').value;
    const arreglosnumeros = formulainput.split('+')
    console.log(arreglosnumeros)
    let suma = 0;
    for (let index = 0; index < arreglosnumeros.length; index++){
        suma = Number(arreglosnumeros[index]) + suma;
    }










console.log(suma)
const scarlet=document.getElementById('calcular')
scarlet.innerHTML="resultado" + suma


}


