import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

    persona!:FormGroup;
    datospersona:string="";
  
    ngOnInit(): void {
      
      this.persona = new FormGroup({
        nombre: new FormControl(''),
        apaterno: new FormControl(''),
        amaterno: new FormControl(''),
        dia: new FormControl(''),
        mes: new FormControl(''),
        year: new FormControl(''),
        sexo: new FormControl('')
      })
      
    }
    onSubmit(){
      console.log(this.persona.controls['nombre'].value);
      console.log(this.persona.controls['apaterno'].value);
      console.log(this.persona.controls['amaterno'].value);
      console.log(this.persona.controls['dia'].value);
      console.log(this.persona.controls['mes'].value);
      console.log(this.persona.controls['year'].value);
      console.log(this.persona.controls['sexo'].value);
      
      let datospersona = {
        datenombre: this.persona.controls['nombre'].value,
        dateapaterno: this.persona.controls['apaterno'].value,
        dateamaterno: this.persona.controls['amaterno'].value,
        datedia: this.persona.controls['dia'].value,
        datemes: this.persona.controls['mes'].value,
        dateyear: this.persona.controls['year'].value,
        datesexo: this.persona.controls['sexo'].value,
      }
      localStorage.setItem('pers',JSON.stringify(datospersona));
    }
    
  
    Genero(sexo:boolean):void{
      if(sexo)
        this.persona.controls['sexo'].setValue('Masculino')
      else
        this.persona.controls['sexo'].setValue('Femenino')
    }
    resetForm(): void {
      this.persona.reset();
    }
}
