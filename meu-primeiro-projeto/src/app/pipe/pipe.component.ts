import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  people = [
    { name: 'Everton' },
    { name: 'Andressa' },
    { name: 'Jean' },
    { name: 'Gean' },
    { name: 'Matheus' },
    { name: 'Jessica' }
  ];

  ngOnInit(): void {
  }

}
