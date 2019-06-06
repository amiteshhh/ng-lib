import { NgModule, ModuleWithProviders } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MyMaterialModule} from './my-material.module';

import { DealComponent } from './deal.component';
import { APP_CONFIG, environment } from '../environment';
import { DealDetailsComponent } from './deal-details/deal-details.component';

var components = [DealComponent, DealDetailsComponent]
@NgModule({
  declarations: components,
  imports: [
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  exports: components
})
export class DealModule {
  public static forRoot(envCode: any, defaults?: any): ModuleWithProviders {
    Object.assign(APP_CONFIG, environment[envCode])
    return {
      ngModule: DealModule
    };
  }
}
