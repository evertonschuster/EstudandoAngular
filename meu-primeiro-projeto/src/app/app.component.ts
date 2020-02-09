import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefa: string = "";

  tarefas: Array<string> = [
    "Tarefa1",
    "Tarefa2",
    "Tarefa3",
    "Tarefa4",
  ];

  title = "a";

  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

}
