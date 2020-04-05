"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function imprimirConsola(constructorClase) {
    //Recibe una función
    console.log(constructorClase);
}
// Un decorador de clase es lo que se va a colocar antes de la definicón de la clase con el @ sin ejecutarlo
let Xmen = 
//el decorador permite a la hora de definir una clase, permite añadir o ejecutar cosas a la clase
//Sirve para añadirle funcionalidades a nuestra clase
class Xmen {
    //Para que yo pueda usar esta clase fuera de este archivo hay que exportar la clase
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    //Aquí puedo implementar métodos
    imprimir() {
        //Impresión en consola de las propiedades
        console.log(`${this.nombre}-${this.clave}`);
    }
};
Xmen = __decorate([
    imprimirConsola
    //el decorador permite a la hora de definir una clase, permite añadir o ejecutar cosas a la clase
    //Sirve para añadirle funcionalidades a nuestra clase
], Xmen);
exports.Xmen = Xmen;
//Al colocar export esta clase va a poder ser utilizada en otros archivos mediante una importación
//Si no se quiere sea utilizada fuera de este archivo, se quita la palabra export y se usa de manera privada en este archivo.
