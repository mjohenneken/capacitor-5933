import { Component, NgZone, OnInit } from "@angular/core";

@Component({
    selector: 'app-a',
    template: 'Component A <a routerLink="/b">Open B</a>'
  })
  export class AComponent implements OnInit {
    constructor(private ngZone: NgZone) {
      console.log("AComponent constructor, zone:",NgZone.isInAngularZone())
    }

    ngOnInit(): void {
      console.log("AComponent init, zone:",NgZone.isInAngularZone())
    }      
  }

  @Component({
    selector: 'app-b',
    template: 'Component B'
  })
  export class BComponent implements OnInit {  
    constructor(private ngZone: NgZone) {
      console.log("AComponent constructor, zone:",NgZone.isInAngularZone())
    }

    ngOnInit(): void {
      console.log("BComponent init, zone:",NgZone.isInAngularZone())
    }      
  }
  