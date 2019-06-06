/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material.module';
import { DealComponent } from './deal.component';
import { APP_CONFIG, environment } from '../environment';
import { DealDetailsComponent } from './deal-details/deal-details.component';
/** @type {?} */
var components = [DealComponent, DealDetailsComponent];
export class DealModule {
    /**
     * @param {?} envCode
     * @param {?=} defaults
     * @return {?}
     */
    static forRoot(envCode, defaults) {
        Object.assign(APP_CONFIG, environment[envCode]);
        return {
            ngModule: DealModule
        };
    }
}
DealModule.decorators = [
    { type: NgModule, args: [{
                declarations: components,
                imports: [
                    BrowserAnimationsModule,
                    MyMaterialModule
                ],
                exports: components
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQUV6RSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUM7QUFTdEQsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBWSxFQUFFLFFBQWM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7SUFDSixDQUFDOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtNeU1hdGVyaWFsTW9kdWxlfSBmcm9tICcuL215LW1hdGVyaWFsLm1vZHVsZSc7XG5cbmltcG9ydCB7IERlYWxDb21wb25lbnQgfSBmcm9tICcuL2RlYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFQUF9DT05GSUcsIGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgRGVhbERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RlYWwtZGV0YWlscy9kZWFsLWRldGFpbHMuY29tcG9uZW50JztcblxudmFyIGNvbXBvbmVudHMgPSBbRGVhbENvbXBvbmVudCwgRGVhbERldGFpbHNDb21wb25lbnRdXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNeU1hdGVyaWFsTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IGNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgRGVhbE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChlbnZDb2RlOiBhbnksIGRlZmF1bHRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgT2JqZWN0LmFzc2lnbihBUFBfQ09ORklHLCBlbnZpcm9ubWVudFtlbnZDb2RlXSlcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlYWxNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=