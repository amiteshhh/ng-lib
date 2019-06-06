/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { APP_CONFIG } from '../environment';
var DealComponent = /** @class */ (function () {
    function DealComponent() {
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = APP_CONFIG.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = APP_CONFIG.BASE_URL; //create a copy just for illustration
        console.log('APP_CONFIG', APP_CONFIG);
    }
    /**
     * @return {?}
     */
    DealComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DealComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dl-deal',
                    template: "\n    <h2>I am dl-deal component </h2>\n    <div>Environment: {{envCode}}</div>\n    <div>Base Url: {{BASE_URL}}</div>\n    <p>\n      deal works!\n    </p>\n  ",
                    styles: [':host{border: 1px solid gray;display:block}']
                }] }
    ];
    /** @nocollapse */
    DealComponent.ctorParameters = function () { return []; };
    return DealComponent;
}());
export { DealComponent };
if (false) {
    /** @type {?} */
    DealComponent.prototype.envCode;
    /** @type {?} */
    DealComponent.prototype.BASE_URL;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWFsLyIsInNvdXJjZXMiOlsibGliL2RlYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUUzQztJQWdCRTs7UUFGQSxZQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLHFDQUFxQzs7UUFDbEUsYUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxxQ0FBcUM7UUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxrS0FPVDs2QkFDUSw2Q0FBNkM7aUJBQ3ZEOzs7O0lBWUQsb0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQVhZLGFBQWE7OztJQUV4QixnQ0FBNkI7O0lBQzdCLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5JIGFtIGRsLWRlYWwgY29tcG9uZW50IDwvaDI+XG4gICAgPGRpdj5FbnZpcm9ubWVudDoge3tlbnZDb2RlfX08L2Rpdj5cbiAgICA8ZGl2PkJhc2UgVXJsOiB7e0JBU0VfVVJMfX08L2Rpdj5cbiAgICA8cD5cbiAgICAgIGRlYWwgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFsnOmhvc3R7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtkaXNwbGF5OmJsb2NrfSddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL2RpcmVjdCBhc3NpZ25tZW50IEFQUF9DT05GSUc9QVBQX0NPTkZJRyB0aHJvd3MgZXJyb3IgJ2Nhbm5vdCBiZSBuYW1lZCdcbiAgZW52Q29kZSA9IEFQUF9DT05GSUcuZW52Q29kZTsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIEJBU0VfVVJMID0gQVBQX0NPTkZJRy5CQVNFX1VSTDsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICBjb25zb2xlLmxvZygnQVBQX0NPTkZJRycsIEFQUF9DT05GSUcpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=