import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  proyectos$: Observable<any>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.cargarCantidadProyectos();
  }

  cargarCantidadProyectos() {
    this.proyectos$ = this.projectService.getProjectsCount();
  }

}
