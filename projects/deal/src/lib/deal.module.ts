import { NgModule } from '@angular/core';

import { MyMaterialModule } from './my-material.module';

import { DealComponent } from './deal.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { environment, environments } from '../environment';

var components = [DealComponent, DealDetailsComponent]
@NgModule({
  declarations: components,
  imports: [
    MyMaterialModule
  ],
  exports: components
})
export class DealModule {
  /**Intializes environment specific api end points and other configurable items.
   * @param envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
   * @param defaults Optional object to be passed to merge in the env config.
   * @example 
   * 1. DealModule.configEnv('DEV')
   * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
   */
  public static configEnv(envCode:string, defaults?: Object) {
    var validEnvCodes = Object.keys(environments);
    if (!validEnvCodes.includes(envCode)) {
      throw `Error initializing deal library. ${envCode} is not a valid environment code. Accepted values are ${validEnvCodes}.\nRefer environment.ts file of library.`
    }
    Object.assign(environment, environments[envCode], defaults);
  }
}
