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
var DealModule = /** @class */ (function () {
    function DealModule() {
    }
    /**
     * @param {?} envCode
     * @param {?=} defaults
     * @return {?}
     */
    DealModule.forRoot = /**
     * @param {?} envCode
     * @param {?=} defaults
     * @return {?}
     */
    function (envCode, defaults) {
        Object.assign(APP_CONFIG, environment[envCode]);
        return {
            ngModule: DealModule
        };
    };
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
    return DealModule;
}());
export { DealModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQUV6RSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUM7QUFDdEQ7SUFBQTtJQWVBLENBQUM7Ozs7OztJQU5lLGtCQUFPOzs7OztJQUFyQixVQUFzQixPQUFZLEVBQUUsUUFBYztRQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztJQUNKLENBQUM7O2dCQWRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEI7O0lBUUQsaUJBQUM7Q0FBQSxBQWZELElBZUM7U0FQWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7TXlNYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9teS1tYXRlcmlhbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEZWFsQ29tcG9uZW50IH0gZnJvbSAnLi9kZWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUFBfQ09ORklHLCBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcbmltcG9ydCB7IERlYWxEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudCc7XG5cbnZhciBjb21wb25lbnRzID0gW0RlYWxDb21wb25lbnQsIERlYWxEZXRhaWxzQ29tcG9uZW50XVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTXlNYXRlcmlhbE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBjb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIERlYWxNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZW52Q29kZTogYW55LCBkZWZhdWx0cz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIE9iamVjdC5hc3NpZ24oQVBQX0NPTkZJRywgZW52aXJvbm1lbnRbZW52Q29kZV0pXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWFsTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19