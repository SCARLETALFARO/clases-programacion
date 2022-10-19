const array1 = [1, 2, 3, 4];

const initialvalue = 0;
const reducefn = (acc, cur, i, arr) => {
    return acc + cur
}

const sumwithinitial = array1.reduce(reducefn.initialvalue);
//const sumwintial = array1.reduce(reducefn):

console.log(sumwithinitial);
//expected output:10