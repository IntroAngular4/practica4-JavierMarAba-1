import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule( {
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    ProjectService
  ]
} )
export class HomeModule { }
