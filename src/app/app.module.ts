import { EnviadosPage } from './../pages/enviados/enviados';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from './../pages/inbox/inbox';
import { Correos } from '../providers/correos/correos';
import { CorreoPage } from '../pages/correo/correo';
import { NuevocorreoPage } from './../pages/nuevocorreo/nuevocorreo';
import { Toast } from '../providers/toast';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,CorreoPage,NuevocorreoPage, EnviadosPage   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,CorreoPage,NuevocorreoPage,EnviadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Correos,
    Toast, 
    Storage
  ]
})
export class AppModule {}
