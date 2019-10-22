import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  cantidadProyectos: number;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.cantidadProyectos = this.projectService.getProjectAmount();
  }

}
