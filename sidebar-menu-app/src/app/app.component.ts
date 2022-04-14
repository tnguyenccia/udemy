import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  selectedIndex: number;

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'easel'
    },
    {
      title: 'Timeline',
      url: '/timeline',
      icon: 'film'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  // selectedIndex(){

  // }

  initializeApp(){
    this.platform.ready()
    .then(() => {     
      StatusBar.setStyle({
        style: Style.Default
      });
      SplashScreen.hide();
    })
  }
}
