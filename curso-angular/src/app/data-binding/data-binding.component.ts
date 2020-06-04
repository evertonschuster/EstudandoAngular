import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.com/';
  cursoAngular = true;
  urlImagem = 'http://www.ecofuturo.org.br/wp-content/uploads/2018/07/Educando-na-Natureza-1222-300x300.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtitCurso() {
    return true;
  }

}
