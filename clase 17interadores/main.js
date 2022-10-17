
//const callback=(element )=>{
//console.log(element)
//return element*2
//}
//const arr =[1,5,6,8].map((element) =>{
//  console.log(element)
//return element*2
//})

//console.log(arr)
//const callback=(Element,indice,arr)=>{
//  console.log(Element,indice,arr)
//return Element*2
//}

const callback = (element) => {
    return element > 5
}
const arr = [1, 5, 6, 8].filter(callback)
console.log(arr)

