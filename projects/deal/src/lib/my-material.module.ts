import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

var components = [MatButtonModule, MatMenuModule, MatSnackBarModule, MatCardModule]
@NgModule({
    imports: components,
    exports: components
})
export class MyMaterialModule {
}
