class Repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.nombre = name;
    this.autor = author;
    this.lenguaje = language;
    this.commits = numberOfCommits;
    this.estrellas = stars;
    this.forks = forks;
    this.eAbierto = issues_open;
    this.eCerrado = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

class Issue {
  constructor(
    name,
    repositoryName,
    status,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.nombre = name;
    this.repositorio = repositoryName;
    this.status = status;
    this.labels = labels;
    this.autor = author;
    this.creacion = dateCreated;
    this.actualizacion = lastUpdated;
  }

  getTitleAndAuthor() {
    return `Titulo del issue ${this.repositoryName} y el autor: ${this.author}`;
  }
  getGeneralInfo() {
    return `Nombre del issue ${this.name}, dia de creacion: ${this.dateCreated} y autor: ${this.author}`;
  }
}

class pullRequest {
  constructor(title, branchName, dateCreated, status, repositoryName, author) {
    this.titulo = title;
    this.rama = branchName;
    this.creacion = dateCreated;
    this.estado = status;
    this.repositorio = repositoryName;
    this.autor = author;
  }

  getStatus() {
    return `El status del PR es: ${this.status}`;
  }
  getTitleAndAuthor() {
    return `El titulo del PR es: ${this.titulo} y el autor es: ${this.author}`;
  }
}

let repositorio = new Repo(
  "MissionNodeJS",
  "carlogilmar",
  "JavaScript",
  100,
  199,
  299,
  10,
  10
);

let issue = new Issue(
  "04 Live 1 Semana 2 [Lunes 11 de Abril",
  "MissionNodeJS",
  "Open",
  ["Finalizado", "Live 1", "Semana-2"],
  "carlogilmar",
  "10 Abril 2022",
  "10 Abril 2022"
);

let pr = new pullRequest(
  "Changes",
  "main",
  "10 de Abril del 2022",
  "Open",
  "my_launchx_blog",
  "AngelicaRoy"
);

console.log(repositorio);
console.log(issue);
console.log(pr);
