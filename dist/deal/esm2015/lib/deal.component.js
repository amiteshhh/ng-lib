/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { APP_CONFIG } from '../environment';
import { MatSnackBar } from '@angular/material/snack-bar';
export class DealComponent {
    //create a copy just for illustration
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        //direct assignment APP_CONFIG=APP_CONFIG throws error 'cannot be named'
        this.envCode = APP_CONFIG.envCode; //create a copy just for illustration
        //create a copy just for illustration
        this.BASE_URL = APP_CONFIG.BASE_URL; //create a copy just for illustration
        console.log('APP_CONFIG', APP_CONFIG);
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this._snackBar.open('Hey its just a message from material', 'OK');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DealComponent.decorators = [
    { type: Component, args: [{
                selector: 'dl-deal',
                template: `
    <h2>I am dl-deal component </h2>
    <div>Environment: {{envCode}}</div>
    <button mat-button (click)="openSnackBar()">Click me!</button>
    <div>Base Url: {{BASE_URL}}</div>
    <p>
      deal works!
    </p>
  `,
                styles: [':host{border: 1px solid gray;display:block}']
            }] }
];
/** @nocollapse */
DealComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /** @type {?} */
    DealComponent.prototype.envCode;
    /** @type {?} */
    DealComponent.prototype.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    DealComponent.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWUxRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTs7UUFGMUMsWUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ2xFLGFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO1FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFDRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7eUJBQ1EsNkNBQTZDO2FBQ3ZEOzs7O1lBZFEsV0FBVzs7OztJQWlCbEIsZ0NBQTZCOztJQUM3QixpQ0FBK0I7Ozs7O0lBQ25CLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHIH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5JIGFtIGRsLWRlYWwgY29tcG9uZW50IDwvaDI+XG4gICAgPGRpdj5FbnZpcm9ubWVudDoge3tlbnZDb2RlfX08L2Rpdj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcigpXCI+Q2xpY2sgbWUhPC9idXR0b24+XG4gICAgPGRpdj5CYXNlIFVybDoge3tCQVNFX1VSTH19PC9kaXY+XG4gICAgPHA+XG4gICAgICBkZWFsIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbJzpob3N0e2JvcmRlcjogMXB4IHNvbGlkIGdyYXk7ZGlzcGxheTpibG9ja30nXVxufSlcbmV4cG9ydCBjbGFzcyBEZWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9kaXJlY3QgYXNzaWdubWVudCBBUFBfQ09ORklHPUFQUF9DT05GSUcgdGhyb3dzIGVycm9yICdjYW5ub3QgYmUgbmFtZWQnXG4gIGVudkNvZGUgPSBBUFBfQ09ORklHLmVudkNvZGU7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBCQVNFX1VSTCA9IEFQUF9DT05GSUcuQkFTRV9VUkw7Ly9jcmVhdGUgYSBjb3B5IGp1c3QgZm9yIGlsbHVzdHJhdGlvblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHsgXG4gICAgY29uc29sZS5sb2coJ0FQUF9DT05GSUcnLCBBUFBfQ09ORklHKVxuICB9XG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKCdIZXkgaXRzIGp1c3QgYSBtZXNzYWdlIGZyb20gbWF0ZXJpYWwnLCAnT0snKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==