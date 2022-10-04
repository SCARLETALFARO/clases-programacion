
const isadult= (age) => {
    if (age >= 18) {
        return true
        
    } else {
            return false
        }
    }
    
    console.log (isadult(18))

    const logmessage = (age) =>{
    if (isadult(age)) {
        console.log("es mayor de edad")

    }
else{
    console.log("es menor de edad")
}
    }
const transformage =(age) => {
    return Number(age)
    }


const userage = prompt ("dame tu edad")
logmessage(transformage(userage))