const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

//Punto 1
console.log("------------------------Punto 1----------------------------");
explorers.forEach((explorer) => {
  console.log(explorer.name);
});

//Punto 2
console.log("------------------------Punto 2----------------------------");
explorers.forEach((tech) => {
  console.log(tech.stack);
});

//Punto 3
console.log("------------------------Punto 3----------------------------");
const lenguajes = explorers.map(function (tech) {
  return tech.stack;
});

console.log(lenguajes);

//Punto 4
console.log("------------------------Punto 4----------------------------");
const js = explorers.filter((lenguaje) => lenguaje.stack.includes("js"));

console.log(js);

//Punto 5
console.log("------------------------Punto 5----------------------------");
const ciudad = explorers.find((city) => city.city == "CDMX");
console.log(
  `El primer explorer que vive en la ciudad de México es: ${ciudad.name}`
);

//Punto 6
console.log("------------------------Punto 6----------------------------");
const ejercicios = explorers.reduce(
  (exp, my_ejercicio) => exp + my_ejercicio.exercises_completed,
  0
);

console.log(
  `Los explorers tienen un total de: ${ejercicios} ejercicios completados`
);

//Punto 7
console.log("-------------------------Punto 7---------------------------");
const front = explorers.some(
  (T) => T.missions.frontend.exercisesFinished === true
);
console.log("Minimo un explorer paso la mision FrontEnd: " + front);

//Punto 8
console.log("------------------------Punto 8----------------------------");
const onBorarding = explorers.every(
  (on) => on.missions.onboarding.isFinished === true
);
console.log("Todos los explorers pasaron el onbording: " + onBorarding);
