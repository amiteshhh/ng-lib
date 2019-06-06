# DealLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

### ng new deal-lib --create-application=false

### ng g library deal --prefix=dl
### ng generate application lib-demo

### ng build deal-lib

### ng serve lib-demo

### ng g c deal-details --project=deal-lib
`Add all lib dependency(like angular material) as peer dependency in lib project and install these dependency along with lib as main dependency in the application which uses it.`

## Usage
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