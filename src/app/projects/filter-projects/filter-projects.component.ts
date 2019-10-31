import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {

  @Output() filtroBusquedaCambio = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  cambioFiltro( textoBusqueda: string ) {

    this.filtroBusquedaCambio.emit( textoBusqueda );
  }
}
