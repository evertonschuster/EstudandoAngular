import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() modouValor: EventEmitter<{ novoValor }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  decrementa() {
    this.valor--;
    this.modouValor.emit({ novoValor: this.valor });
  }

  incrementa() {
    this.valor++;
    this.modouValor.emit({ novoValor: this.valor });
  }
}
