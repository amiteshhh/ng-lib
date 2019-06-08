import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { environment } from '../environments/environment';

import { DealModule } from '../../../deal/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    var libConfigs = [DealModule.configEnv];//keep adding other modules
    libConfigs.forEach(libConfig=>libConfig(environment.envCode))
  }
}
