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
        this._snackBar.open('Hey its just a message from material');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWUxRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTs7UUFGMUMsWUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxxQ0FBcUM7O1FBQ2xFLGFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEscUNBQXFDO1FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFDRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDt5QkFDUSw2Q0FBNkM7YUFDdkQ7Ozs7WUFkUSxXQUFXOzs7O0lBaUJsQixnQ0FBNkI7O0lBQzdCLGlDQUErQjs7Ozs7SUFDbkIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUF9DT05GSUcgfSBmcm9tICcuLi9lbnZpcm9ubWVudCdcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGwtZGVhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgyPkkgYW0gZGwtZGVhbCBjb21wb25lbnQgPC9oMj5cbiAgICA8ZGl2PkVudmlyb25tZW50OiB7e2VudkNvZGV9fTwvZGl2PlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKClcIj5DbGljayBtZSE8L2J1dHRvbj5cbiAgICA8ZGl2PkJhc2UgVXJsOiB7e0JBU0VfVVJMfX08L2Rpdj5cbiAgICA8cD5cbiAgICAgIGRlYWwgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFsnOmhvc3R7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtkaXNwbGF5OmJsb2NrfSddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL2RpcmVjdCBhc3NpZ25tZW50IEFQUF9DT05GSUc9QVBQX0NPTkZJRyB0aHJvd3MgZXJyb3IgJ2Nhbm5vdCBiZSBuYW1lZCdcbiAgZW52Q29kZSA9IEFQUF9DT05GSUcuZW52Q29kZTsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIEJBU0VfVVJMID0gQVBQX0NPTkZJRy5CQVNFX1VSTDsvL2NyZWF0ZSBhIGNvcHkganVzdCBmb3IgaWxsdXN0cmF0aW9uXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhcikgeyBcbiAgICBjb25zb2xlLmxvZygnQVBQX0NPTkZJRycsIEFQUF9DT05GSUcpXG4gIH1cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oJ0hleSBpdHMganVzdCBhIG1lc3NhZ2UgZnJvbSBtYXRlcmlhbCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19