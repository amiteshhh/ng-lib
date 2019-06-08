/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { environment } from '../../environment';
var DealDetailsComponent = /** @class */ (function () {
    function DealDetailsComponent() {
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = environment.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = environment.BASE_URL; //create a copy just for illustration
    }
    /**
     * @return {?}
     */
    DealDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DealDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dl-deal-details',
                    template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar\n         class=\"example-header-image\"></div>\n    <mat-card-title>Intra Product Vehicle</mat-card-title>\n    <mat-card-subtitle>CF1234</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque non fuga sint consectetur soluta\n      explicabo! Eaque quo ipsum ex corrupti nam, repellat illum odit vero, laboriosam laborum corporis excepturi!\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button\n            color=\"primary\">Save</button>\n    <button mat-button>Cancel</button>\n    <button mat-button\n            [matMenuTriggerFor]=\"menu\">Show more</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Environment: {{envCode}}</button>\n      <button mat-menu-item>Base Url: {{BASE_URL}}</button>\n    </mat-menu>\n  </mat-card-actions>\n</mat-card>",
                    styles: [":host{border:1px solid gray;display:block}"]
                }] }
    ];
    /** @nocollapse */
    DealDetailsComponent.ctorParameters = function () { return []; };
    return DealDetailsComponent;
}());
export { DealDetailsComponent };
if (false) {
    /** @type {?} */
    DealDetailsComponent.prototype.envCode;
    /** @type {?} */
    DealDetailsComponent.prototype.BASE_URL;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFL0M7SUFTRTs7UUFGQSxZQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBLHFDQUFxQzs7UUFDbkUsYUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxxQ0FBcUM7SUFDckQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscytCQUE0Qzs7aUJBRTdDOzs7O0lBVUQsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxvQkFBb0I7OztJQUUvQix1Q0FBOEI7O0lBQzlCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkbC1kZWFsLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZWFsRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vZGlyZWN0IGFzc2lnbm1lbnQgQVBQX0NPTkZJRz1BUFBfQ09ORklHIHRocm93cyBlcnJvciAnY2Fubm90IGJlIG5hbWVkJ1xuICBlbnZDb2RlID0gZW52aXJvbm1lbnQuZW52Q29kZTsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIEJBU0VfVVJMID0gZW52aXJvbm1lbnQuQkFTRV9VUkw7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==