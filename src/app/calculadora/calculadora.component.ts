import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  altura: number = 0;
  peso: number = 0;
  result: number = 0;
  resultados = [] = 
  [
    {nome: 'Baixo Peso', classe: 'perigo', imagem: '../../assets/baixo.png'},
    {nome: 'Peso Adequado', classe: 'ok', imagem: '../../assets/adequado.jpg'},
    {nome: 'Sobrepeso', classe: 'atencao', imagem: '../../assets/sobrepeso.jpg'},
    {nome: 'Obesidade Grau 1', classe: 'atencao', imagem: '../../assets/obesidade-grau1.jpg'},
    {nome: 'Obesidade Grau 2', classe: 'perigo', imagem: '../../assets/obesidade-grau2.jpg'},
    {nome: 'Obesidade Extrema', classe: 'perigo', imagem: '../../assets/obesidade-extrema.jpg'}
  ];
  classificacao: any = {};

  calcularIMC() {
    const alturaMetros = this.altura / 100;

    this.result = Math.round((this.peso / (alturaMetros * alturaMetros)) * 100)/100;

    // IMC <18,5kg/m2 - baixo peso
    // IMC >18,5 até 24,9kg/m2 - eutrofia (peso adequado)
    // IMC ≥25 até 29,9kg/m2 - sobrepeso
    // IMC >30,0kg/m2 até 34,9kg/m2 - obesidade grau 1
    // IMC >35kg/m2 até 39,9kg/m2 - obesidade grau 2
    // IMC > 40kg/m2 - obesidade extrema

    if (this.result < 18.5) {
      this.classificacao = this.resultados[0];
    } else if (this.result < 24.9) {
      this.classificacao = this.resultados[1];
    } else if (this.result < 29.9) {
      this.classificacao = this.resultados[2];
    } else if (this.result < 34.9) {
      this.classificacao = this.resultados[3];
    } else if (this.result < 39.9) {
      this.classificacao = this.resultados[4];
    } else {
      this.classificacao = this.resultados[5];
    }
  }
}
