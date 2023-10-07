import { Component } from '@angular/core';


@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre: string = "";
  nBoletas: number = 0;
  cantidadComprador: number = 0;
  precioBoleta: number = 12;
  descuento: number = 0;
  result: number = 0;
  descTarjet:number=.90;
  personas:number=0;
  mensaje:string="";



  CalcularDescuento() {
    this.personas = this.nBoletas / this.cantidadComprador;

    if (this.personas <= 7) {

      if (this.nBoletas > 5) {
        this.descuento = 0.85;
        this.result = this.nBoletas * this.precioBoleta;
  /*       this.desc1 = this.result * this.descuento;
   */   this.result = this.result * this.descuento;
        if (document.querySelector('input[id="tarjetaSi"]:checked')) {
          this.result = this.result * this.descTarjet;
        }
        else if (document.querySelector('input[id="tarejtaNo"]:checked')) {
          this.result = this.result;

        }
      }
      else if (this.nBoletas >= 3) {
        this.descuento = 0.90;
        this.result = this.nBoletas * this.precioBoleta;
        this.result = this.result * this.descuento;
        if (document.querySelector('input[id="tarjetaSi"]:checked')) {
          this.result = this.result * this.descTarjet;

        }
        else if (document.querySelector('input[id="tarejtaNo"]:checked')) {
          this.result = this.result;

        }
      }
      else if (this.nBoletas < 3) {
        this.descuento = 0;
        this.result = this.nBoletas * this.precioBoleta;
        if (document.querySelector('input[id="tarjetaSi"]:checked')) {
          this.result = this.result * this.descTarjet;

        }
        else if (document.querySelector('input[id="tarejtaNo"]:checked')) {
          this.result = this.result;

        }
      }
      this.mensaje="Disfruta de tu funcion";

    }
      else{
        this.result= 0; 
        this.mensaje="Una persona no puede comprar mas de 7 Boletas"
      }
    
    
  }

  reset(){
    this.nombre='';
    this.nBoletas=0;
    this.cantidadComprador=0;
    this.precioBoleta=0;
    this.descuento=0;
    this.result=0;
    this.descTarjet=0.90;
    this.personas=0;
    this.mensaje="";
  }



}
