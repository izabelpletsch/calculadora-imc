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
    {nome: 'Obesidade Grau 3 - Extrema', classe: 'perigo', imagem: '../../assets/obesidade-extrema.jpg'}
  ];
  classificacao: any = {};

  calcularIMC() {
    const alturaMetros = this.altura / 100;

    this.result = Math.round((this.peso / (alturaMetros * alturaMetros)) * 100)/100;

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
