import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
} )
export class ViewerProjectComponent implements OnInit {

  proyecto: Project;
  proyectoDisponible: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private projectService: ProjectService ) {

    let projectId = activatedRoute.snapshot.params['id'];
    this.proyecto = projectService.getProject( projectId );

    if ( this.proyecto ) this.proyectoDisponible = true;
    else this.proyectoDisponible = false;

    console.log( this.proyecto );
  }

  ngOnInit() {
  }

}
