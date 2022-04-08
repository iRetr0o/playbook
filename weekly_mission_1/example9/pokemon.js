export default class Pokemon {
    constructor(nombre){
        this.nombre = nombre;
    }
    sayHello() {
        console.log(`Mi pokemon ${this.nombre} te saluda!!!`);
    }
    sayMessage(mensaje) {
        console.log(`Mi pokemon ${this.nombre} te dice: ${mensaje}`);
    }
}