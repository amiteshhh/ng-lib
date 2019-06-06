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
                    template: "<h2>I am dl-deal-details component </h2>\n<div>Environment: {{envCode}}</div>\n<div>Base Url: {{BASE_URL}}</div>\n<p>\n  deal details works!\n</p>\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nbGliZGVhbC8iLCJzb3VyY2VzIjpbImxpYi9kZWFsLWRldGFpbHMvZGVhbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFOUM7SUFTRTs7UUFGQSxZQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLHFDQUFxQzs7UUFDbEUsYUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxxQ0FBcUM7SUFDcEQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMFZBQTRDOztpQkFFN0M7Ozs7SUFVRCwyQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLG9CQUFvQjs7O0lBRS9CLHVDQUE2Qjs7SUFDN0Isd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUF9DT05GSUcgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGwtZGVhbC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlYWwtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlYWwtZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVhbERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL2RpcmVjdCBhc3NpZ25tZW50IEFQUF9DT05GSUc9QVBQX0NPTkZJRyB0aHJvd3MgZXJyb3IgJ2Nhbm5vdCBiZSBuYW1lZCdcbiAgZW52Q29kZSA9IEFQUF9DT05GSUcuZW52Q29kZTsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIEJBU0VfVVJMID0gQVBQX0NPTkZJRy5CQVNFX1VSTDsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19