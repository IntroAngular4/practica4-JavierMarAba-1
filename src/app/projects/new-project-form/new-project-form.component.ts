import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
} )
export class NewProjectFormComponent implements OnInit {

  public formProyecto: FormGroup;

  @Output() nuevoProyecto = new EventEmitter<string>();

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  crearProyecto() {
    let nombreProyecto = this.formProyecto.value['nombreProyecto'];
    this.formProyecto.reset();
    this.nuevoProyecto.emit( nombreProyecto );
  }

  private buildForm() {
    this.formProyecto = this.formBuilder.group( {
      nombreProyecto: ['', [Validators.required]]
    } );
  }
}
