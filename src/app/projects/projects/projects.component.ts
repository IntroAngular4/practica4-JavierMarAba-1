import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  proyectosOriginales: Project[];
  proyectos: Project[];
  esNuevoProyectoVisible: boolean;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.proyectosOriginales = this.projectService.getProjects();
    this.proyectos = this.proyectosOriginales;
    this.esNuevoProyectoVisible = false;
  }

  toggleNewProject() {
    this.esNuevoProyectoVisible = !this.esNuevoProyectoVisible;
  }

  aplicarFiltro(texto: string) {

    //ToLowerCase para que no distinga entre mayúsculas y minúsculas.
    let textoLowerCase = texto.toLowerCase();

    this.proyectos = this.proyectosOriginales.filter( p =>
      p.name.toLowerCase().includes( textoLowerCase )
    );

  }
}
