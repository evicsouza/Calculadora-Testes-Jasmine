import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  soma(num1: number, num2: number){ 
    return num1 + num2;
  }

  subtracao(num1: number, num2: number){
    return num1 - num2;
  }

  multiplicacao(num1: number, num2: number){
    return num1 * num2;
  }

  divisao(num1: number, num2: number){
    if(num2 != 0){
      return num1/num2;
    }
    throw console.error();    
  }

}
