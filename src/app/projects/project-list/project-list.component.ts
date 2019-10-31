import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component( {
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
} )
export class ProjectListComponent implements OnInit {

  @Input() proyectos: Project[];
  proyectosMostrados: Project[];
  public isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  ngOnInit() {

    this.proyectosMostrados = this.proyectos;
  }

  aplicarFiltro( texto: string ) {

    //ToLowerCase para que no distinga entre mayúsculas y minúsculas.
    let textoLowerCase = texto.toLowerCase();

    this.proyectosMostrados = this.proyectos.filter( p =>
      p.name.toLowerCase().includes( textoLowerCase )
    );
  }
}
