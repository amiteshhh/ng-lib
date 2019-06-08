# DealLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

>Showcasing library project __deal__. It contains one more application project __lib-demo__ to run, test and debug the library project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

### ng new deal-lib --create-application=false

### ng g library deal --prefix=dl
### ng generate application lib-demo

### ng build deal-lib `requires to finally generate the lib package but not required for running the app`

### ng serve lib-demo or simply ng serve

### ng g c deal-details --project=deal-lib

`Add all lib dependency(like angular material) as peer dependency in lib project and install these dependency along with lib as main dependency in the application which uses it. `

 Refer [Lib Readme for details](./projects/deal)