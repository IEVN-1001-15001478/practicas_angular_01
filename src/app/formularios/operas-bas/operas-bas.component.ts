import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num:string='';
  resultado:number=0;
  grados:number=32;
  result:string="";

 
  convertir(){
    if (document.querySelector('input[id="centigrados"]:checked')) {
      this.result=(this.resultado = parseInt(this.num) * 9/5 + 32) + "° (C) " 
    }
    if (document.querySelector('input[id="fahrenheit"]:checked')) {
      this.result=(this.resultado = (parseInt(this.num)- 32) * 5/9) + "° (F)"
  }
  
}
}