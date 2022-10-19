const dondeestaelusuario = 5
const posicionascensores = [-1, 5, 10, 1, 1]
const distanciacallbackfn = (pisodelosascensor) => {
    return dondeestaelusuario - pisodelosascensor

}
const distancia = posicionascensores.map(distanciacallbackfn)
console.log(distancia)

