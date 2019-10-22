import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component( {
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
} )
export class NewProjectFormComponent implements OnInit {

  public nombreProyecto: string;
  @Output() nuevoProyecto = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.nombreProyecto = "";
  }

  crearProyecto() {

    if ( this.nombreProyecto.length > 0 ) {

      this.nuevoProyecto.emit( this.nombreProyecto );
      //Limpiamos el formulario para un nuevo proyecto.
      this.nombreProyecto = "";
    }
  }
}
