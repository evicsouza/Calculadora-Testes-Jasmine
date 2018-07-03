import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
    
    it('should create', () => {
      component = new CalcComponent;
      expect(component).toBeTruthy();
    });
    it("deve verificar a função de soma", ()=>{
      expect(component.soma(1,1)).toEqual(2);
      expect(component.soma(1,2)).toEqual(3);
      expect(component.soma(1,3)).toEqual(4);
      expect(component.soma(1,4)).toEqual(5);
    });
    it("deve verificar a função de subtração", ()=>{
      expect(component.subtracao(2,1)).toEqual(1);
      expect(component.subtracao(3,1)).toEqual(2);
      expect(component.subtracao(4,1)).toEqual(3);
      expect(component.subtracao(5,1)).toEqual(4);
    });
    it("deve verificar a função de multiplicação", ()=>{
      expect(component.multiplicacao(2,2)).toEqual(4);
      expect(component.multiplicacao(2,1)).toEqual(2);
      expect(component.multiplicacao(2,0)).toEqual(0);
      expect(component.multiplicacao(2,5)).toEqual(10);
    });
    it("deve verificar a função de divisão", ()=>{
      expect(component.divisao(2,2)).toEqual(1);
      expect(component.divisao(2,1)).toEqual(2);
      expect(component.divisao(8,2)).toEqual(4);
      expect(component.divisao(9,3)).toEqual(3);
    });
    it("deve verificar a exceção da função de divisão", ()=>{
      expect(function() {
        component.divisao(1,0)
    }).toThrow();
    });
});
