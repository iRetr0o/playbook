class User {
  constructor(name, followers, creacion) {
    this.nombre = name;
    this.seguidores = followers;
    this.creacion = creacion;
  }
}

class Post {
  constructor(author, date, description, comments, reactions) {
    this.autor = author;
    this.fecha = date;
    this.descripcion = description;
    this.comentarios = comments;
    this.reacciones = reactions;
  }
}
class Biography {
  constructor(user, description) {
    this.usurario = user;
    this.descripcion = description;
  }
}

let usuario = new User("Luisito Comunica", 22000, "Julio 18 del 2012");

let biografia = new Biography(
  "Luisito Comunica",
  "Intente buscar un trabajo, luego decidí crearme uno"
);

let lastPost = new Post(
  "Luisito Comunica",
  "18 de abril del 2022",
  "Querido asaltante...",
  1000,
  24500
);

console.log(usuario);
console.log(lastPost);
console.log(biografia);
