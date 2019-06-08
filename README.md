# DealLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

>Showcasing library project __deal__. It contains one more application project __lib-demo__ to run, test and debug the library project.
>lib published on npm with name __nglibdeal__

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Below steps followed(order not maintained :P) to create this lib project. 

#### ng new deal-lib --create-application=false

#### ng g library deal --prefix=dl
#### ng generate application lib-demo

#### ng build deal-lib

#### ng serve lib-demo

### ng build deal-lib `requires to finally generate the lib package but not required for running the app`

### ng serve lib-demo or simply ng serve

### ng g c deal-details --project=deal-lib

#### ng add @angular/material --project=deal-lib

`While developing lib project, add lib dependency(like angular material) as peer dependency in lib project as ng-cli was throwing error. Other external app needs to install all lib dependency along with lib manually. Refer below link to see it in action`
 Refer [Lib Readme for details](./projects/deal)

[demo app](https://github.com/amiteshhh/ng-lib-demo) 

## Using this library
```javascript

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { environment } from '../environments/environment';

import { DealModule } from 'deal';//or whatever the name of npm package

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
