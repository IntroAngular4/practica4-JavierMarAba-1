import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  proyectos$: Observable<Project[]>;
  loadingError$ = new Subject<boolean>();

  constructor( private projectService: ProjectService ) {
  }

  ngOnInit() {
    this.getProyectos()
  }

  getProyectos() {
    this.proyectos$ = this.projectService.getProjects().pipe(
      catchError((error) => {
        console.error('Error cargando el proyecto: ', error);
        this.loadingError$.next(true);
        return of();
      })
    );;
  }
}
