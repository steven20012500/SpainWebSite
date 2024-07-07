import { Component, OnInit, ElementRef, ViewChild, viewChild} from '@angular/core';
import { CuestionarioService } from '../services/cuestionario.service';
import { Cuestionario } from '../class/cuestionario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.css'
})
export class CuestionarioComponent implements OnInit{
  @ViewChild('resultado2', { static: false }) resultadoElement: ElementRef | undefined;
  
  constructor(private cuestionarioService: CuestionarioService ) { }

  cuestionarios: Cuestionario[] = [];
  cuestionario: Cuestionario = {
    _id: '',
    nombre: '',
    email: '',
    genero: '',
    pais: '',
    preguntas: [],
    respuestas: [],
    nota: 0
 };
 preguntas = [
  { pregunta: '¿Cuál es la capital de España?', respuesta: '' },
  { pregunta: '¿Cuál es el idioma oficial de España?', respuesta: '' },
  { pregunta: '¿Cuál es la moneda de España?', respuesta: '' },
  { pregunta: '¿Cuál es el plato típico de España?', respuesta: '' },
  { pregunta: '¿Cuál es el deporte más popular de España?', respuesta: '' }
];

respuestasCorrectas = ['Madrid', 'Español', 'Euro', 'Paella', 'Fútbol'];

resultado: number = 0;

  ngOnInit(): void {

    //this.cuestionarioService.obtenerCuestionarios().subscribe((cuestionarios: Cuestionario[]) => {
   //   this.cuestionarios = cuestionarios.map(cuestionarios => ({ ...cuestionarios}));
   // });  
  }

  agregarCuestionario(cuestionarioForm: NgForm) {
    this.resultado= 0;
    if (cuestionarioForm.valid) {
      console.log('Cuestionario', this.cuestionario);
    this.preguntas.forEach((pregunta, index) => {
      this.cuestionario.preguntas.push(pregunta.pregunta);
      this.cuestionario.respuestas.push(pregunta.respuesta);
      if (pregunta.respuesta.toLowerCase() === this.respuestasCorrectas[index].toLowerCase()) {
        this.resultado += 1;
      }
    });
    this.cuestionario.nota = this.resultado;
    this.cuestionarioService.agregarCuestionario(this.cuestionario).subscribe({
      next: response => {
        console.log('Cuestionario enviado', response);
        window.location.reload();
        this.resetForm();
      },
      error: error => {
        console.error('Error al enviar cuestionario', error);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
  } else {
    alert('Por favor, complete todos los campos');
    console.log('Por favor, complete todos los campos');

  }
  
  }


  calcularResultado() {
    this.resultado = 0;
    this.preguntas.forEach((pregunta, index) => {
      if (pregunta.respuesta.toLowerCase() === this.respuestasCorrectas[index].toLowerCase()) {
        this.resultado += 1;
      }
    });
    this.scrollToResultado();
  }

  private scrollToResultado() {
    if (this.resultadoElement) {
      this.resultadoElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private resetForm() {
    this.cuestionario = {
      _id: '',
      nombre: '',
      email: '',
      genero: '',
      pais: '',
      preguntas: [],
      respuestas: [],
      nota: 0
    };
    this.preguntas.forEach(p => p.respuesta = '');
  }

}


