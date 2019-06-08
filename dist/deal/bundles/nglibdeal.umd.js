(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/button'), require('@angular/material/menu'), require('@angular/material/snack-bar'), require('@angular/material/card'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('nglibdeal', ['exports', '@angular/material/button', '@angular/material/menu', '@angular/material/snack-bar', '@angular/material/card', '@angular/core'], factory) :
    (factory((global.nglibdeal = {}),global.ng.material.button,global.ng.material.menu,global.ng.material['snack-bar'],global.ng.material.card,global.ng.core));
}(this, (function (exports,button,menu,snackBar,card,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DealService = /** @class */ (function () {
        function DealService() {
        }
        DealService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DealService.ctorParameters = function () { return []; };
        /** @nocollapse */ DealService.ngInjectableDef = i0.defineInjectable({ factory: function DealService_Factory() { return new DealService(); }, token: DealService, providedIn: "root" });
        return DealService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var environment = {};
    //will be updated to environment val from below 
    /** @type {?} */
    var environments = {
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
            { type: i0.Component, args: [{
                        selector: 'dl-deal',
                        template: "\n    <h2>I am dl-deal new component </h2>\n    <div>Environment: {{environment.envCode}}</div>\n    <button mat-button (click)=\"openSnackBar()\">Click me!</button>\n    <div>Base Url: {{environment.BASE_URL}}</div>\n    <p>\n      deal works each time!\n    </p>\n  ",
                        styles: [':host{border: 1px solid gray;display:block}']
                    }] }
        ];
        /** @nocollapse */
        DealComponent.ctorParameters = function () {
            return [
                { type: snackBar.MatSnackBar }
            ];
        };
        return DealComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [button.MatButtonModule, menu.MatMenuModule, snackBar.MatSnackBarModule, card.MatCardModule];
    var MyMaterialModule = /** @class */ (function () {
        function MyMaterialModule() {
        }
        MyMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: components,
                        exports: components
                    },] }
        ];
        return MyMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'dl-deal-details',
                        template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar\n         class=\"example-header-image\"></div>\n    <mat-card-title>Intra Product Vehicle</mat-card-title>\n    <mat-card-subtitle>CF1234</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque non fuga sint consectetur soluta\n      explicabo! Eaque quo ipsum ex corrupti nam, repellat illum odit vero, laboriosam laborum corporis excepturi!\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button\n            color=\"primary\">Save</button>\n    <button mat-button>Cancel</button>\n    <button mat-button\n            [matMenuTriggerFor]=\"menu\">Show more</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Environment: {{envCode}}</button>\n      <button mat-menu-item>Base Url: {{BASE_URL}}</button>\n    </mat-menu>\n  </mat-card-actions>\n</mat-card>",
                        styles: [":host{border:1px solid gray;display:block}"]
                    }] }
        ];
        /** @nocollapse */
        DealDetailsComponent.ctorParameters = function () { return []; };
        return DealDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [DealComponent, DealDetailsComponent];
    var DealModule = /** @class */ (function () {
        function DealModule() {
        }
        /**Intializes environment specific api end points and other configurable items.
         * @param envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
         * @param defaults Optional object to be passed to merge in the env config.
         * @example
         * 1. DealModule.configEnv('DEV')
         * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
         */
        /**
         * Intializes environment specific api end points and other configurable items.
         * \@example
         * 1. DealModule.configEnv('DEV')
         * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
         * @param {?} envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
         * @param {?=} defaults Optional object to be passed to merge in the env config.
         * @return {?}
         */
        DealModule.configEnv = /**
         * Intializes environment specific api end points and other configurable items.
         * \@example
         * 1. DealModule.configEnv('DEV')
         * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
         * @param {?} envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
         * @param {?=} defaults Optional object to be passed to merge in the env config.
         * @return {?}
         */
            function (envCode, defaults) {
                /** @type {?} */
                var validEnvCodes = Object.keys(environments);
                if (!validEnvCodes.includes(envCode)) {
                    throw "Error initializing deal library. " + envCode + " is not a valid environment code. Accepted values are " + validEnvCodes + ".\nRefer environment.ts file of library.";
                }
                Object.assign(environment, environments[envCode], defaults);
            };
        DealModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: components$1,
                        imports: [
                            MyMaterialModule
                        ],
                        exports: components$1
                    },] }
        ];
        return DealModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DealService = DealService;
    exports.DealComponent = DealComponent;
    exports.DealModule = DealModule;
    exports.ɵa = DealDetailsComponent;
    exports.ɵb = MyMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=nglibdeal.umd.js.map