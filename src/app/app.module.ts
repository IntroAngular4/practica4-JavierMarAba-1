import { LayoutModule } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotificacionesStoreService } from './services/notificaciones-store.service';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LayoutModule,

  ],
  providers: [
    NotificacionesStoreService,
    DatePipe
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
