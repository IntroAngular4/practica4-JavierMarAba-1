import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() cantidadProyectos: number;

  cards = [
    { title: 'Card 1', cols: 2, rows: 1, content: '' },
    { title: 'Card 2', cols: 1, rows: 1, content: '' },
    { title: 'Card 3', cols: 1, rows: 1, content: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
