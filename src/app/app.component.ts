import { Component, NgZone } from '@angular/core';
import { App, } from '@capacitor/app';


declare let gtag: (a: string, b: string, c: object) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {  

  constructor(ngZone: NgZone) {
    App.addListener('backButton', () => {
      ngZone.run(() => {
          window.history.back();
      });
    });
  }

  ngOnInit(): void {
    console.log("AppComponent init, zone:",NgZone.isInAngularZone())
  }     

  
}
