import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { environment } from '../environments/environment';

import { DealModule } from 'deal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DealModule.forRoot(environment.envCode),//additional data if any
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
