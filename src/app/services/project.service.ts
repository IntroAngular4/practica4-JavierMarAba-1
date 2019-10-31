import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];
  private apiURL = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {
    this.projects = [];
  }

  getProjects() {
    return this.httpClient.get<any>( this.apiURL);
  }

  getProject( projectId: number ) {
    let url = this.apiURL + '/' + projectId;
    return this.httpClient.get<any>( url );
  }

  postProject( nombreProyecto: string ) {
    return this.httpClient.post( this.apiURL, { name: nombreProyecto } );
  }

}
