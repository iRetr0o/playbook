class profile {
  constructor(name, stars) {
    this.nombre = name;
    this.estrellas = stars;
  }
}

class travel {
  constructor(fecha, hora, piloto, precio, placa) {
    this.date = fecha;
    this.hour = hora;
    this.pilot = piloto;
    this.price = precio;
    this.number = placa;
  }
}

let perfil = new profile("Luis Javier", 4.78);

let viaje = new travel(
  "11 de abril del 2022",
  "9:26",
  "Luis Javier",
  "$199.92",
  "J21AEZ"
);

console.log(perfil);
console.log(viaje);
