
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private sideMenuList: Array<object>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
 
  }

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'clipboard'
    },
    {
      title: 'Empresas',
      url: '/empresas',
      icon: 'briefcase'
    },
    {
      title: 'Conductores',
      url: '/conductores',
      icon: 'person'
    },
    {
      title: 'Vehiculos',
      url: '/vehiculos',
      icon: 'car'
    },
    {
      title: 'Asignar Vehiculos',
      url: '/vehiculosconductor',
      icon: 'car'
    }
    
  ]; 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}

