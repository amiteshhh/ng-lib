/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { environment } from '../../environment';
export class DealDetailsComponent {
    //create a copy just for illustration
    constructor() {
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = environment.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = environment.BASE_URL; //create a copy just for illustration
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DealDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'dl-deal-details',
                template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar\n         class=\"example-header-image\"></div>\n    <mat-card-title>Intra Product Vehicle</mat-card-title>\n    <mat-card-subtitle>CF1234</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque non fuga sint consectetur soluta\n      explicabo! Eaque quo ipsum ex corrupti nam, repellat illum odit vero, laboriosam laborum corporis excepturi!\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button\n            color=\"primary\">Save</button>\n    <button mat-button>Cancel</button>\n    <button mat-button\n            [matMenuTriggerFor]=\"menu\">Show more</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Environment: {{envCode}}</button>\n      <button mat-menu-item>Base Url: {{BASE_URL}}</button>\n    </mat-menu>\n  </mat-card-actions>\n</mat-card>",
                styles: [":host{border:1px solid gray;display:block}"]
            }] }
];
/** @nocollapse */
DealDetailsComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DealDetailsComponent.prototype.envCode;
    /** @type {?} */
    DealDetailsComponent.prototype.BASE_URL;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFPL0MsTUFBTSxPQUFPLG9CQUFvQjs7SUFJL0I7O1FBRkEsWUFBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ25FLGFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO0lBQ3JELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzK0JBQTRDOzthQUU3Qzs7Ozs7O0lBR0MsdUNBQThCOztJQUM5Qix3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGwtZGVhbC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlYWwtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlYWwtZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVhbERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL2RpcmVjdCBhc3NpZ25tZW50IEFQUF9DT05GSUc9QVBQX0NPTkZJRyB0aHJvd3MgZXJyb3IgJ2Nhbm5vdCBiZSBuYW1lZCdcbiAgZW52Q29kZSA9IGVudmlyb25tZW50LmVudkNvZGU7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBCQVNFX1VSTCA9IGVudmlyb25tZW50LkJBU0VfVVJMOy8vY3JlYXRlIGEgY29weSBqdXN0IGZvciBpbGx1c3RyYXRpb25cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=