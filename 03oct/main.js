const saludar = () => {
    console.log("hello world!")

}
const getfullname = (name, apellido1, apellido2) => {
    return name + " " + apellido1 + " " + apellido2
}
const fullname = getfullname('scarlet', 'alfaro', 'monzo');
console.log(fullname, "tu nombre tiene", fullname.length, "caracteres")

const espar = (number) => {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(espar(2))
const number =[1,2,3,4,6,9]
for(let i = 0; i < number.length; i++){
    if(espar(number[i])){
        console.log("el numero", number[i],'es par')

        }else{
            console.log("el numero", number[i],'es inpar')
        }
    }

//saludar()
//console.log(getsalute("scarlet,alfaro))
//console.log(getsalute("demian"))