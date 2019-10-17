import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  proyectos: Project[];

  constructor() { }

  ngOnInit() {
    this.proyectos = environment.projects;
  }

}
