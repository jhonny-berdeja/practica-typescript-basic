console.log("Hola");
//For ecxecute ts-node index.ts


//Tipos de datos
let nombre: string | undefined = 'Juan';

let numero: number = 123;
let booleano: boolean = true;
let nulo: null =null;
let indefinido: undefined = undefined;
let arreglo: number[] = [1, 2, 3];

//Inferencia de tipos
const arreglo2 = [1,2, true, 3, "H", 4];
arreglo2.push(1);
arreglo2.push(false);
arreglo2.push("A");

//Objeto

class Persona{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola ${this.nombre}`);
    }
}

const persona = new Persona("Jhonny", 34);
console.log(persona.edad);
persona.saludar();

class Estudiante extends Persona {
    curso: string;
    constructor(nombre: string, edad: number, curso: string){
        super(nombre, edad);
        this.curso = curso;
    }
    estudia(): void {
        console.log(`${this.nombre} está estudiando ${this.curso}`);
    }
}

const estudiante = new Estudiante("Milton", 34, "Matematicas");

estudiante.estudia();
//For ecxecute ts-node index.ts

interface IPersona {
    nombre: string;
    edad: number;
    saludar();
}

//Se puede usar así
const humano: IPersona = {
    nombre: "",
    edad: 0,
    saludar: function () {
        console.log("Function not implemented.");
    }
}

//Contrato
class Alumno implements IPersona {
    nombre: string;
    edad: number;
    curso: string;
    constructor(nombre: string, edad: number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    saludar() {
        throw new Error("Method not implemented.");
    }
    estudia(): void {
        console.log(`${this.nombre} está estudiando ${this.curso}`);
    }

}