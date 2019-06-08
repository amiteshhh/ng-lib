/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './my-material.module';
import { DealComponent } from './deal.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { environment, environments } from '../environment';
/** @type {?} */
var components = [DealComponent, DealDetailsComponent];
var DealModule = /** @class */ (function () {
    function DealModule() {
    }
    /**Intializes environment specific api end points and other configurable items.
     * @param envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
     * @param defaults Optional object to be passed to merge in the env config.
     * @example
     * 1. DealModule.configEnv('DEV')
     * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
     */
    /**
     * Intializes environment specific api end points and other configurable items.
     * \@example
     * 1. DealModule.configEnv('DEV')
     * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
     * @param {?} envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
     * @param {?=} defaults Optional object to be passed to merge in the env config.
     * @return {?}
     */
    DealModule.configEnv = /**
     * Intializes environment specific api end points and other configurable items.
     * \@example
     * 1. DealModule.configEnv('DEV')
     * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
     * @param {?} envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
     * @param {?=} defaults Optional object to be passed to merge in the env config.
     * @return {?}
     */
    function (envCode, defaults) {
        /** @type {?} */
        var validEnvCodes = Object.keys(environments);
        if (!validEnvCodes.includes(envCode)) {
            throw "Error initializing deal library. " + envCode + " is not a valid environment code. Accepted values are " + validEnvCodes + ".\nRefer environment.ts file of library.";
        }
        Object.assign(environment, environments[envCode], defaults);
    };
    DealModule.decorators = [
        { type: NgModule, args: [{
                    declarations: components,
                    imports: [
                        MyMaterialModule
                    ],
                    exports: components
                },] }
    ];
    return DealModule;
}());
export { DealModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXZELFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztBQUN0RDtJQUFBO0lBc0JBLENBQUM7SUFkQzs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDVyxvQkFBUzs7Ozs7Ozs7O0lBQXZCLFVBQXdCLE9BQWMsRUFBRSxRQUFpQjs7WUFDbkQsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sc0NBQW9DLE9BQU8sOERBQXlELGFBQWEsNkNBQTBDLENBQUE7U0FDbEs7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCOztJQWdCRCxpQkFBQztDQUFBLEFBdEJELElBc0JDO1NBZlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE15TWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL215LW1hdGVyaWFsLm1vZHVsZSc7XG5cbmltcG9ydCB7IERlYWxDb21wb25lbnQgfSBmcm9tICcuL2RlYWwuY29tcG9uZW50JztcbmltcG9ydCB7IERlYWxEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCwgZW52aXJvbm1lbnRzIH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG52YXIgY29tcG9uZW50cyA9IFtEZWFsQ29tcG9uZW50LCBEZWFsRGV0YWlsc0NvbXBvbmVudF1cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgaW1wb3J0czogW1xuICAgIE15TWF0ZXJpYWxNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogY29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBEZWFsTW9kdWxlIHtcbiAgLyoqSW50aWFsaXplcyBlbnZpcm9ubWVudCBzcGVjaWZpYyBhcGkgZW5kIHBvaW50cyBhbmQgb3RoZXIgY29uZmlndXJhYmxlIGl0ZW1zLlxuICAgKiBAcGFyYW0gZW52Q29kZSBUeXBpY2FsbHkgREVWLCBQUk9EIGV0Yy4gUmVmZXIgZW52aXJvbm1lbnQudHMgb2YgRGVhbCBsaWJyYXJ5IHByb2plY3QuXG4gICAqIEBwYXJhbSBkZWZhdWx0cyBPcHRpb25hbCBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIG1lcmdlIGluIHRoZSBlbnYgY29uZmlnLlxuICAgKiBAZXhhbXBsZSBcbiAgICogMS4gRGVhbE1vZHVsZS5jb25maWdFbnYoJ0RFVicpXG4gICAqIDIuIERlYWxNb2R1bGUuY29uZmlnRW52KCdERVYnLCB7Q09NTU9OX0FQSTogJ2h0dHBzOi8vc29tZXVybC5jb20nfSlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlnRW52KGVudkNvZGU6c3RyaW5nLCBkZWZhdWx0cz86IE9iamVjdCkge1xuICAgIHZhciB2YWxpZEVudkNvZGVzID0gT2JqZWN0LmtleXMoZW52aXJvbm1lbnRzKTtcbiAgICBpZiAoIXZhbGlkRW52Q29kZXMuaW5jbHVkZXMoZW52Q29kZSkpIHtcbiAgICAgIHRocm93IGBFcnJvciBpbml0aWFsaXppbmcgZGVhbCBsaWJyYXJ5LiAke2VudkNvZGV9IGlzIG5vdCBhIHZhbGlkIGVudmlyb25tZW50IGNvZGUuIEFjY2VwdGVkIHZhbHVlcyBhcmUgJHt2YWxpZEVudkNvZGVzfS5cXG5SZWZlciBlbnZpcm9ubWVudC50cyBmaWxlIG9mIGxpYnJhcnkuYFxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGVudmlyb25tZW50LCBlbnZpcm9ubWVudHNbZW52Q29kZV0sIGRlZmF1bHRzKTtcbiAgfVxufVxuIl19