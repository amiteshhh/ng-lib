import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

var components = [MatButtonModule, MatMenuModule, MatSnackBarModule]
@NgModule({
    imports: components,
    exports: components
})
export class MyMaterialModule {
}
