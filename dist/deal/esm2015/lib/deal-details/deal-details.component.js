/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { APP_CONFIG } from '../../environment';
export class DealDetailsComponent {
    //create a copy just for illustration
    constructor() {
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = APP_CONFIG.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = APP_CONFIG.BASE_URL; //create a copy just for illustration
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFPOUMsTUFBTSxPQUFPLG9CQUFvQjs7SUFJL0I7O1FBRkEsWUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ2xFLGFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO0lBQ3BELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzK0JBQTRDOzthQUU3Qzs7Ozs7O0lBR0MsdUNBQTZCOztJQUM3Qix3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkbC1kZWFsLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZWFsRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vZGlyZWN0IGFzc2lnbm1lbnQgQVBQX0NPTkZJRz1BUFBfQ09ORklHIHRocm93cyBlcnJvciAnY2Fubm90IGJlIG5hbWVkJ1xuICBlbnZDb2RlID0gQVBQX0NPTkZJRy5lbnZDb2RlOy8vY3JlYXRlIGEgY29weSBqdXN0IGZvciBpbGx1c3RyYXRpb25cbiAgQkFTRV9VUkwgPSBBUFBfQ09ORklHLkJBU0VfVVJMOy8vY3JlYXRlIGEgY29weSBqdXN0IGZvciBpbGx1c3RyYXRpb25cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=