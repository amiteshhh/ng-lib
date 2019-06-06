/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
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
                imports: [],
                exports: components
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWFsLyIsInNvdXJjZXMiOlsibGliL2RlYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7SUFFekUsVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDO0FBT3RELE1BQU0sT0FBTyxVQUFVOzs7Ozs7SUFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQVksRUFBRSxRQUFjO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO0lBQ0osQ0FBQzs7O1lBWkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWFsQ29tcG9uZW50IH0gZnJvbSAnLi9kZWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUFBfQ09ORklHLCBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcbmltcG9ydCB7IERlYWxEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudCc7XG5cbnZhciBjb21wb25lbnRzID0gW0RlYWxDb21wb25lbnQsIERlYWxEZXRhaWxzQ29tcG9uZW50XVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IGNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgRGVhbE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChlbnZDb2RlOiBhbnksIGRlZmF1bHRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgT2JqZWN0LmFzc2lnbihBUFBfQ09ORklHLCBlbnZpcm9ubWVudFtlbnZDb2RlXSlcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlYWxNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=