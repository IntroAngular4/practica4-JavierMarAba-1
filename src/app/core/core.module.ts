import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule( {
  declarations: [LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    LayoutComponent
  ]
} )
export class CoreModule { }
