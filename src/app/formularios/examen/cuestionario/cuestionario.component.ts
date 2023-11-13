import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

    questionario!:FormGroup;
    resp:number = 0;
    resultadoexamen:string = "";
  

    ngOnInit(): void {
      
      this.questionario = new FormGroup({
        pregunta1: new FormControl(false),
        pregunta2: new FormControl(false),
        pregunta3: new FormControl(false),
        pregunta4: new FormControl(false),
        pregunta5: new FormControl(false),
        pregunta6: new FormControl(false),
        pregunta7: new FormControl(false),
        pregunta8: new FormControl(false),
        pregunta9: new FormControl(false),
        pregunta10: new FormControl(false)
      })
      
    }
    onSubmit(){
      this.resp = 0;
      for(let i=0; i<10; i++){
        switch(i){
          case 0:
            if(this.questionario.controls['pregunta1'].value == true)
              this.resp++; break;
          case 1:
            if(this.questionario.controls['pregunta2'].value == true)
              this.resp++; break;
          case 2:
            if(this.questionario.controls['pregunta3'].value == true)
              this.resp++; break;
          case 3:
            if(this.questionario.controls['pregunta4'].value == true)
              this.resp++; break;
          case 4:
            if(this.questionario.controls['pregunta5'].value == true)
              this.resp++; break;
          case 5:
            if(this.questionario.controls['pregunta6'].value == true)
              this.resp++; break;
          case 6:
            if(this.questionario.controls['pregunta7'].value == true)
              this.resp++; break;
          case 7:
            if(this.questionario.controls['pregunta8'].value == true)
              this.resp++; break;
          case 8:
            if(this.questionario.controls['pregunta9'].value == true)
              this.resp++; break;
          case 9:
            if(this.questionario.controls['pregunta10'].value == true)
              this.resp++; break;
          default: break;
        }
      }
      
      localStorage.setItem('respuestas',JSON.stringify(this.resp));

      console.log(this.resp);
    }
  
    answer1(res:boolean):void{
      this.questionario.controls['pregunta1'].setValue(res)
    }
    answer2(res:boolean):void{
      this.questionario.controls['pregunta2'].setValue(res)
    }
    answer3(res:boolean):void{
      this.questionario.controls['pregunta3'].setValue(res)
    }
    answer4(res:boolean):void{
      this.questionario.controls['pregunta4'].setValue(res)
    }
    answer5(res:boolean):void{
      this.questionario.controls['pregunta5'].setValue(res)
    }
    answer6(res:boolean):void{
      this.questionario.controls['pregunta6'].setValue(res)
    }
    answer7(res:boolean):void{
      this.questionario.controls['pregunta7'].setValue(res)
    }
    answer8(res:boolean):void{
      this.questionario.controls['pregunta8'].setValue(res)
    }
    answer9(res:boolean):void{
      this.questionario.controls['pregunta9'].setValue(res)
    }
    answer10(res:boolean):void{
      this.questionario.controls['pregunta10'].setValue(res)
    }
    
   
}
