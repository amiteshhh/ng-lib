import { Component, OnInit } from '@angular/core';
import { environment } from '../environment'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'dl-deal',
  template: `
    <h2>I am dl-deal new component </h2>
    <div>Environment: {{environment.envCode}}</div>
    <button mat-button (click)="openSnackBar()">Click me!</button>
    <div>Base Url: {{environment.BASE_URL}}</div>
    <p>
      deal works each time!
    </p>
  `,
  styles: [':host{border: 1px solid gray;display:block}']
})
export class DealComponent implements OnInit {
  environment = environment;
  
  // envCode = environment.envCode;
  // BASE_URL = environment.BASE_URL;
  constructor(private _snackBar: MatSnackBar) {
  }
  openSnackBar() {
    this._snackBar.open('Hey its just a message from material', 'OK');
  }

  ngOnInit() {
  }

}
