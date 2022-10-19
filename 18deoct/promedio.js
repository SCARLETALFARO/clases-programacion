const grades = [5.1, 4.7, 4.6, 4.4, 3.8, 3.7, 3.1, 2.9, 2.7, 2.8]

const reducefn = (acumulador, actual) => {
    return acumulador + actual
}
const reducehighestfn=(previo, actual)=>{
    if(previo > actual){
        return previo
    }else{ 
        return actual
    }
}
const reducelowestfn=(previo, actual) =>{

}
const highestgrade= grades.reduce(reducehighestfn)
const lowestgrade = grades.reduce(reducelowestfn)

console.log("el promedio del oficio de programacion fue:" + grades.reduce(reducefn)/
grades.length)
console.log("la nota mas alta fue:" + highestgrade)
console.log("la nota mas baja fue:" + lowestgrade)