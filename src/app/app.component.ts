import { EnviadosPage } from './../pages/enviados/enviados';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InboxPage } from '../pages/inbox/inbox';
import { Menu } from '../../node_modules/ionic-angular/umd/components/app/menu-interface';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InboxPage;
  inboxPage = InboxPage;
  enviadosPage = EnviadosPage;
  noLeidosInbox= 6;
  noLeidosEnviados= 10;

  @ViewChild('nav') menu:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              public menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irAPagina(pagina){
    this.menu.setRoot(pagina);
    this.menuCtrl.close();
  }
}

