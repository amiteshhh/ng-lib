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
                    template: "<h2>I am dl-deal-details component </h2>\n<div>Environment: {{envCode}}</div>\n<div>Base Url: {{BASE_URL}}</div>\n<p>\n  deal details works!\n</p>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC1kZXRhaWxzL2RlYWwtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTlDO0lBU0U7O1FBRkEsWUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ2xFLGFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO0lBQ3BELENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhKQUE0Qzs7aUJBRTdDOzs7O0lBVUQsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxvQkFBb0I7OztJQUUvQix1Q0FBNkI7O0lBQzdCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9kaXJlY3QgYXNzaWdubWVudCBBUFBfQ09ORklHPUFQUF9DT05GSUcgdGhyb3dzIGVycm9yICdjYW5ub3QgYmUgbmFtZWQnXG4gIGVudkNvZGUgPSBBUFBfQ09ORklHLmVudkNvZGU7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBCQVNFX1VSTCA9IEFQUF9DT05GSUcuQkFTRV9VUkw7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==