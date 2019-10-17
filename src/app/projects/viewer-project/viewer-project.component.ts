import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
} )
export class ViewerProjectComponent implements OnInit {

  project: Project;

  constructor( private activatedRoute: ActivatedRoute ) {
    let projectId = activatedRoute.snapshot.params['id'];
    this.project = environment.projects[projectId];
  }

  ngOnInit() {
  }

}
