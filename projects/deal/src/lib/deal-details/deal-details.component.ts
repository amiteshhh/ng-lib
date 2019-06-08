import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment'

@Component({
  selector: 'dl-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
  envCode = environment.envCode;//create a copy just for illustration
  BASE_URL = environment.BASE_URL;//create a copy just for illustration
  constructor() { }

  ngOnInit() {
  }

}
