// como declarar variables 
const variable = 1
let variable2 = 2


//como asignar valores a una variable
variable2 = "otra cosa"

// tipos de variables
// texto (string)
const texto = "texto" + "texto" //textotexto
//numero (number)
const numero = 2

//bolean
const boleanos = true; //false

// arreglos
const arreglos = (1, 2, 3,4)

//funciones (functions)
const sumar = (parametros, parametro2) => {
    return parametro - parametro2
}

const calculadora = {
    sumar: (numero1, numero2) => {
        return numero1 + numero2
    },
    resta: (numero1, numero2) => {
         return numero1 - numero2
    },
    multiplicar: (numero1, numero2) => {
          return numero1, numero2
    }
}

const activardiv =() =>{
    const div = document.getElementById('resultado')
    div.className = "activo"
}

const inactivardiv =() =>{
    const div = document.getElementById('resultado')
    div.className = "inactivo"
}

