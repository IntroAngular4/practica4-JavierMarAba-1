import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  cantidadProyectos: number;

  constructor() { }

  ngOnInit() {
    this.cantidadProyectos = environment.projects.length;
  }

}
