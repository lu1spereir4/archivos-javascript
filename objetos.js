let caja = {
    cuadernos: 10,
    lapices: 5,
    papel: "A4",
    fotografias: ["foto1.jpg", "foto2.jpg"],
    estado: "En buen estado"
};

console.log(caja);

for (let propiedad in caja) {
    console.log(`${propiedad}: ${caja[propiedad]} (Tipo: ${typeof caja[propiedad]})`);
}
