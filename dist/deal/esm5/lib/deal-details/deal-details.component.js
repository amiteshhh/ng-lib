/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { APP_CONFIG } from '../../environment';
var DealDetailsComponent = /** @class */ (function () {
    function DealDetailsComponent() {
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = APP_CONFIG.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = APP_CONFIG.BASE_URL; //create a copy just for illustration
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFOUM7SUFTRTs7UUFGQSxZQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLHFDQUFxQzs7UUFDbEUsYUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxxQ0FBcUM7SUFDcEQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscytCQUE0Qzs7aUJBRTdDOzs7O0lBVUQsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxvQkFBb0I7OztJQUUvQix1Q0FBNkI7O0lBQzdCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9kaXJlY3QgYXNzaWdubWVudCBBUFBfQ09ORklHPUFQUF9DT05GSUcgdGhyb3dzIGVycm9yICdjYW5ub3QgYmUgbmFtZWQnXG4gIGVudkNvZGUgPSBBUFBfQ09ORklHLmVudkNvZGU7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBCQVNFX1VSTCA9IEFQUF9DT05GSUcuQkFTRV9VUkw7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==