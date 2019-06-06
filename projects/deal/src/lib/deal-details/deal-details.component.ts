import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../environment'

@Component({
  selector: 'dl-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
  envCode = APP_CONFIG.envCode;//create a copy just for illustration
  BASE_URL = APP_CONFIG.BASE_URL;//create a copy just for illustration
  constructor() { }

  ngOnInit() {
  }

}
