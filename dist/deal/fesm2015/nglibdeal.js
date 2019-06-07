import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DealService {
    constructor() { }
}
DealService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DealService.ctorParameters = () => [];
/** @nocollapse */ DealService.ngInjectableDef = defineInjectable({ factory: function DealService_Factory() { return new DealService(); }, token: DealService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var APP_CONFIG = {};
//will be updated to environment val from below  
/** @type {?} */
var environment = {
    DEV: {
        envCode: 'DEV',
        BASE_URL: 'http://deal.dev.com'
    },
    PROD: {
        envCode: 'PROD',
        BASE_URL: 'http://deal.prod.com'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DealComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [MatButtonModule, MatMenuModule, MatSnackBarModule, MatCardModule];
class MyMaterialModule {
}
MyMaterialModule.decorators = [
    { type: NgModule, args: [{
                imports: components,
                exports: components
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DealDetailsComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$1 = [DealComponent, DealDetailsComponent];
class DealModule {
    /**
     * @param {?} envCode
     * @param {?=} defaults
     * @return {?}
     */
    static forRoot(envCode, defaults) {
        Object.assign(APP_CONFIG, environment[envCode]);
        return {
            ngModule: DealModule
        };
    }
}
DealModule.decorators = [
    { type: NgModule, args: [{
                declarations: components$1,
                imports: [
                    BrowserAnimationsModule,
                    MyMaterialModule
                ],
                exports: components$1
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DealService, DealComponent, DealModule, DealDetailsComponent as ɵa, MyMaterialModule as ɵb };

//# sourceMappingURL=nglibdeal.js.map