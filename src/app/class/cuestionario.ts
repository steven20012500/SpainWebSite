export class Cuestionario {
    constructor (_id = '',nombre= '', email= '', genero= '', pais= '', preguntas= [], respuestas= [], nota = 0){
        this._id = _id;
        this.nombre = nombre;
        this.email = email;
        this.genero = genero;
        this.pais = pais;
        this.preguntas = preguntas;
        this.respuestas = respuestas;
        this.nota = nota;
    }
    _id: string;
    nombre: string;
    email: string;
    genero: string;
    pais: string;
    preguntas: string[];
    respuestas: string[];
    nota : number;
}

