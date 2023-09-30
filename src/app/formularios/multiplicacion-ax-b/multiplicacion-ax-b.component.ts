import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {
 num1:number=0;
 num2:number=0;
 res:number=0;
 result:string="";

 multiplicar(){
  this.result="";
  let r = this.num2;
  /* this.res = this.num1 * this.num2; */
    for (let i = 1; i < this.num1; i++) {
      r = r + this.num2;
      this.result += this.num2.toString() + " + ";

      
    }
    
    /* this.resultado = this.res + this.result + " = "  + r; */
    this.result += this.num2.toString() + " = " + r;
    
  }
 }


