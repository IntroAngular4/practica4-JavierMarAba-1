import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { environment } from '../../../environments/environment';
import { Project } from '../../model/project.model';


@Component( {
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
} )
export class NewProjectComponent implements OnInit {

  public project: Project;
  formularioEsValido = true;

  @ViewChild( 'guardarProyectoError', { static: false } ) private guardarProyectoError: SwalComponent;
  @ViewChild( 'guardarProyecto', { static: false } ) private guardarProyecto: SwalComponent;

  constructor() {
  }

  ngOnInit() {

    this.project = { id: -1, name: '' };

  }

  getProjects() {
    return environment.projects;
  }

  addNewProject() {

    if ( this.project.name.length > 4 ) {
      this.formularioEsValido = true;
      this.project.name = ""
      this.guardarProyecto.fire();
    }
    else {
      this.formularioEsValido = false;
      this.guardarProyectoError.fire();
    }
  }

}
