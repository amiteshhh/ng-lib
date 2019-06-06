# DealLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

>lib published on npm with name __nglibdeal__

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Below steps followed(order not maintained :P) to create this lib project. 

#### ng new deal-lib --create-application=false

#### ng g library deal --prefix=dl
#### ng generate application lib-demo

#### ng build deal-lib

#### ng serve lib-demo

#### ng g c deal-details --project=deal-lib
#### ng add @angular/material --project=deal-lib

`While developing lib project, add lib dependency(like angular material) as peer dependency in lib project as ng-cli was throwing error. Other external app needs to install all lib dependency along with lib manually. Refer below link to see it in action`

[demo app](https://github.com/amiteshhh/ng-lib-demo) 

## Using this library
```javascript

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
```
