import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];

  constructor() {

    this.projects = [
      { id: 0, name: 'Learn Angular' },
      { id: 1, name: 'Develop My Dream app' },
      { id: 2, name: 'Travel around the world' },
      { id: 3, name: 'Clean my room' },
      { id: 4, name: 'Learn Advanced Angular' }
    ];
  }

  getProject( projectId: number ): Project {
    let project = this.projects.filter( p => p.id == projectId );
    //Devolvemos únicamente el primer elemento del array, al buscar por Id recibiremos uno o ninguno
    return project[0];
  }

  getProjects() {
    return this.projects;
  }

  getProjectAmount() {
    return this.projects.length;
  }

  addNewProject( name: string ) {

    //Calcular el siguiente ID
    let lastProjectId = this.projects[this.projects.length - 1].id;
    this.projects.push( { id: lastProjectId + 1, name: name } );
  }
}
