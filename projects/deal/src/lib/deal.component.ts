import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../environment'

@Component({
  selector: 'dl-deal',
  template: `
    <h2>I am dl-deal component </h2>
    <div>Environment: {{envCode}}</div>
    <div>Base Url: {{BASE_URL}}</div>
    <p>
      deal works!
    </p>
  `,
  styles: [':host{border: 1px solid gray;display:block}']
})
export class DealComponent implements OnInit {
  //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
  envCode = APP_CONFIG.envCode;//create a copy just for illustration
  BASE_URL = APP_CONFIG.BASE_URL;//create a copy just for illustration
  constructor() { 
    console.log('APP_CONFIG', APP_CONFIG)
  }

  ngOnInit() {
  }

}
