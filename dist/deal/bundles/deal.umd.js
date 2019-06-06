(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('deal', ['exports', '@angular/core'], factory) :
    (factory((global.deal = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

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
            { type: i0.Component, args: [{
                        selector: 'dl-deal',
                        template: "\n    <h2>I am dl-deal component </h2>\n    <div>Environment: {{envCode}}</div>\n    <div>Base Url: {{BASE_URL}}</div>\n    <p>\n      deal works!\n    </p>\n  ",
                        styles: [':host{border: 1px solid gray;display:block}']
                    }] }
        ];
        /** @nocollapse */
        DealComponent.ctorParameters = function () { return []; };
        return DealComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'dl-deal-details',
                        template: "<h2>I am dl-deal-details component </h2>\n<div>Environment: {{envCode}}</div>\n<div>Base Url: {{BASE_URL}}</div>\n<p>\n  deal details works!\n</p>",
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
    var components = [DealComponent, DealDetailsComponent];
    var DealModule = /** @class */ (function () {
        function DealModule() {
        }
        /**
         * @param {?} envCode
         * @param {?=} defaults
         * @return {?}
         */
        DealModule.forRoot = /**
         * @param {?} envCode
         * @param {?=} defaults
         * @return {?}
         */
            function (envCode, defaults) {
                Object.assign(APP_CONFIG, environment[envCode]);
                return {
                    ngModule: DealModule
                };
            };
        DealModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: components,
                        imports: [],
                        exports: components
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=deal.umd.js.map