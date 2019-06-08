/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { environment } from '../environment';
import { MatSnackBar } from '@angular/material/snack-bar';
var DealComponent = /** @class */ (function () {
    // envCode = environment.envCode;
    // BASE_URL = environment.BASE_URL;
    function DealComponent(_snackBar) {
        this._snackBar = _snackBar;
        this.environment = environment;
    }
    /**
     * @return {?}
     */
    DealComponent.prototype.openSnackBar = /**
     * @return {?}
     */
    function () {
        this._snackBar.open('Hey its just a message from material', 'OK');
    };
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
                    template: "\n    <h2>I am dl-deal new component </h2>\n    <div>Environment: {{environment.envCode}}</div>\n    <button mat-button (click)=\"openSnackBar()\">Click me!</button>\n    <div>Base Url: {{environment.BASE_URL}}</div>\n    <p>\n      deal works each time!\n    </p>\n  ",
                    styles: [':host{border: 1px solid gray;display:block}']
                }] }
    ];
    /** @nocollapse */
    DealComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    return DealComponent;
}());
export { DealComponent };
if (false) {
    /** @type {?} */
    DealComponent.prototype.environment;
    /**
     * @type {?}
     * @private
     */
    DealComponent.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRDtJQWdCRSxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLHVCQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBSjFDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBSzFCLENBQUM7Ozs7SUFDRCxvQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDhRQVFUOzZCQUNRLDZDQUE2QztpQkFDdkQ7Ozs7Z0JBZFEsV0FBVzs7SUE2QnBCLG9CQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FkWSxhQUFhOzs7SUFDeEIsb0NBQTBCOzs7OztJQUlkLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkbC1kZWFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDI+SSBhbSBkbC1kZWFsIG5ldyBjb21wb25lbnQgPC9oMj5cbiAgICA8ZGl2PkVudmlyb25tZW50OiB7e2Vudmlyb25tZW50LmVudkNvZGV9fTwvZGl2PlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKClcIj5DbGljayBtZSE8L2J1dHRvbj5cbiAgICA8ZGl2PkJhc2UgVXJsOiB7e2Vudmlyb25tZW50LkJBU0VfVVJMfX08L2Rpdj5cbiAgICA8cD5cbiAgICAgIGRlYWwgd29ya3MgZWFjaCB0aW1lIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbJzpob3N0e2JvcmRlcjogMXB4IHNvbGlkIGdyYXk7ZGlzcGxheTpibG9ja30nXVxufSlcbmV4cG9ydCBjbGFzcyBEZWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgXG4gIC8vIGVudkNvZGUgPSBlbnZpcm9ubWVudC5lbnZDb2RlO1xuICAvLyBCQVNFX1VSTCA9IGVudmlyb25tZW50LkJBU0VfVVJMO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbignSGV5IGl0cyBqdXN0IGEgbWVzc2FnZSBmcm9tIG1hdGVyaWFsJywgJ09LJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=