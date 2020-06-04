import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  nome: string;
  name: string;
  nomeDoCurso = 'teste do curso';

  pessoa = {
    nome: 'def',
    idade: 17
  };


  constructor() { }

  ngOnInit(): void {
  }

  onMudouValor(valor) {
    console.log('valor', valor);
  }
}
