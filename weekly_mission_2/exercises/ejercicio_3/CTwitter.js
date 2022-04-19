class User {
  constructor(usuario, username, bio, age) {
    this.user = usuario;
    this.userName = username;
    this.biografia = bio;
    this.edad = age;
  }
}

class Trending_topic {
  constructor(name, numberOfTrending, tweets) {
    this.nombre = name;
    this.trend = numberOfTrending;
    this.tweets = tweets;
  }
}

class hashtag {
  constructor(names, numberOfTrending, day) {
    this.nombres = names;
    this.trends = numberOfTrending;
    this.dia = day;
  }
}

let usuario = new User(
  "Oscar Gutiérrez",
  "iretr0o",
  "Software developer en proceso",
  "23"
);

let trending = new Trending_topic("#Edomex", 1, "13.1k");

let hashtag = new hashtag(
  [
    "#Edomex",
    "#2YearsWithReborn",
    "LeyMinera",
    "#SKZTourOnLatam",
    "#AmorEnCustodia",
  ],
  [1, 3, 4, 7, 8],
  "18 de Abril del 2022"
);

console.log(usuario);
console.log(trending);
console.log(hashtag);
