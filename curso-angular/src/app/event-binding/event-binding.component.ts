import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  botaoClicado() {
    alert('Me clicaram');
  }

  onKeyup(evento: KeyboardEvent) {
    console.log(evento);
    console.log((evento.target as HTMLInputElement).value);

    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOutOrOuver() {
    this.isMouseOver = !this.isMouseOver;
  }
}
