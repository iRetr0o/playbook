const repo = {
    name: "MissionNodeJS",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`;
    }
   }
   
   console.log("Nombre del repo: " + repo.name);
   console.log("Issues totales: " + repo.getTotalIssues());
   console.log(repo.getGeneralInfo());
   
   const issue = {
       name: "04 Live 1 Semana 2 [Lunes 11 de Abril",
       repositoryName: "MissionNodeJS",
       status: "Open",
       labels: ["Finalizado", "Live 1", "Semana-2"],
       author: "carlogilmar",
       dateCreated: "10 Abril 2022",
       lastUpdated: "10 Abril 2022",
   
       getTitleAndAuthor() {
           return `Titulo del issue ${this.repositoryName} y el autor: ${this.author}`;
       },
       getGeneralInfo() {
           return `Nombre del issue ${this.name}, dia de creacion: ${this.dateCreated} y autor: ${this.author}`;
       }
   }
   
   const pullRequest = {
       titulo: "Changes",
       branchName: "main",
       dateCreated: "10 de Abril del 2022",
       status: "Open",
       repositoryName: "my_launchx_blog",
       author: "AngelicaRoy",
   
       getStatus() {
           return `El status del PR es: ${this.status}`;
       },
       getTitleAndAuthor() {
           return `El titulo del PR es: ${this.titulo} y el autor es: ${this.author}`;
       }
   }