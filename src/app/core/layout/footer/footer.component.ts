import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notificacion, TipoNotificacionEnum } from '../../../models/notification.model';
import { NotificacionesStoreService } from '../../../services/notificaciones-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private toastrOptions;
  mensajeFooter: string;

  constructor( private toastr: ToastrService, private notificacionesStore: NotificacionesStoreService ) {

    this.toastrOptions = {
      positionClass: 'toast-top-center',
      allowHtml: true
    }
  }

  ngOnInit() {

    this.notificacionesStore.select$()
      .subscribe( notificaciones =>
        notificaciones.forEach( n => {
          this.mensajeFooter = n.mensaje;
          this.mostrarToast( n );
        } ) );
  }

  mostrarToast( notificacion: Notificacion ) {

    let notificationTitle: string;

    switch ( notificacion.tipoNotificacion ) {
        case TipoNotificacionEnum.success:
          notificationTitle = 'Success';
          this.toastr.success( notificacion.mensaje, notificationTitle, this.toastrOptions )
          break;
        case TipoNotificacionEnum.error:
          notificationTitle = 'Error';
          this.toastr.error( notificacion.mensaje, notificationTitle, this.toastrOptions )
          break;
      }
  }

}
