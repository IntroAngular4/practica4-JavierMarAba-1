import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';



@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
