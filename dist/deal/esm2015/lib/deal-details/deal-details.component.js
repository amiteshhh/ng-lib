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
                template: "<h2>I am dl-deal-details component </h2>\n<div>Environment: {{envCode}}</div>\n<div>Base Url: {{BASE_URL}}</div>\n<p>\n  deal details works!\n</p>\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFPOUMsTUFBTSxPQUFPLG9CQUFvQjs7SUFJL0I7O1FBRkEsWUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ2xFLGFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO0lBQ3BELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwVkFBNEM7O2FBRTdDOzs7Ozs7SUFHQyx1Q0FBNkI7O0lBQzdCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9kaXJlY3QgYXNzaWdubWVudCBBUFBfQ09ORklHPUFQUF9DT05GSUcgdGhyb3dzIGVycm9yICdjYW5ub3QgYmUgbmFtZWQnXG4gIGVudkNvZGUgPSBBUFBfQ09ORklHLmVudkNvZGU7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBCQVNFX1VSTCA9IEFQUF9DT05GSUcuQkFTRV9VUkw7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==