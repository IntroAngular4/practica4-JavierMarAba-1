import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ProjectService } from '../../services/project.service';


@Component( {
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
} )
export class NewProjectComponent implements OnInit {

  @ViewChild( 'guardarProyecto', { static: false } ) private guardarProyecto: SwalComponent;

  constructor( private projectService: ProjectService ) { }

  ngOnInit() { }

  crearProyecto( nombreProyecto ) {
    this.projectService.postProject( nombreProyecto )
      .subscribe( res => {
        this.guardarProyecto.fire();
      } );
  }
}
