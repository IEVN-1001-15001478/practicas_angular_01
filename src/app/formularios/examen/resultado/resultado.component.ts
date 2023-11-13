import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  Personas:any;
  Examen:any;
  nombres:string | null = null;
  fechaNacimiento:number = 0;
  EdadCalculada:number | null = null;
  yearNacimiento: number = 0;
  signoZodiacalChino: string | null = null;
  rutaImagen: string | null = null;
  mensaje:string = '';
  total: number | null = null;

  nombrecompleto(){
    this.nombres = '';

    this.nombres = this.Personas['datenombre'] + " " + this.Personas['dateapaterno'] + " " + this.Personas['dateamaterno'];
  }

  CalcularEdad(){
    this.fechaNacimiento = 0;
    this.fechaNacimiento = this.Personas['dateyear'];
    const anioActual = new Date().getFullYear();
    this.EdadCalculada = anioActual - this.fechaNacimiento;

    if(this.EdadCalculada = null){
      this.EdadCalculada = 0;
    }
    }

    CalcularSignoZodiacal(){
    this.yearNacimiento = 0;
    this.yearNacimiento = this.Personas['dateyear'];
    if(this.yearNacimiento){
      //Lista de animales en el zodiaco chino
      const animales = ['mono', 'gallo', 'perro', 'cerdo', 'rata', 'buey', 'tigre', 'conejo', 'dragon', 'serpiente', 'caballo', 'cabra'];

      //El año del calendario chino tiene un ciclo de 12 años
      const indice = (this.yearNacimiento - 4) % 12;
      this.signoZodiacalChino = animales[indice];

      //Asignar la ruta de las imagenes segun el nombre del signo zodicacal
      this.rutaImagen = `assets/zodiaco/${this.signoZodiacalChino.toLowerCase()}.png`;

    }
    }

    ResultadoExamen(){
      this.total = 0;
      const storedResult = localStorage.getItem('respuestas');
      if(storedResult){
        this.total = JSON.parse(storedResult);

        //Mensajes de calificación
        if(this.total == 10)
        {
          this.mensaje = '¡Felicidades! Obtuviste la mejor calificación de Ingles --> 10/10';
        }else if (this.total == 9) {
          this.mensaje = '¡Muy Bien! Obtuviste una calificación de Ingles --> 9/10';
        }else if (this.total == 8) {
          this.mensaje = '¡Bien hecho! Obtuviste una calificación de ingles --> 8/10';
        } else {
          this.mensaje = 'Puedes intentarlo de nuevo para mejorar. REPROBASTE';
        }

      }
    }
    cargarFormulario(){

    }

  mostrardatos():void{
    let resultperson:any = localStorage.getItem('pers');
    let resultexam:any = localStorage.getItem('respuestas');

    this.Personas = JSON.parse(resultperson);
    this.Examen = JSON.parse(resultexam);

    this.nombrecompleto();
    this.CalcularEdad();
    this.CalcularSignoZodiacal();
    this.ResultadoExamen();
    
  }

}
