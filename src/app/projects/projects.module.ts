import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProjectService } from '../services/project.service';
import { UrlInterceptorService } from '../services/url-interceptor.service';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

@NgModule( {
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    FilterProjectsComponent,
    ProjectListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    SweetAlert2Module,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true
    }
  ]
} )
export class ProjectsModule { }
