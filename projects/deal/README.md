# DealLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Usage
```javascript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//required as deal lib uses material
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


```