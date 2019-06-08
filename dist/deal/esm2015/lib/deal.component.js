/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { environment } from '../environment';
import { MatSnackBar } from '@angular/material/snack-bar';
export class DealComponent {
    // envCode = environment.envCode;
    // BASE_URL = environment.BASE_URL;
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.environment = environment;
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
    <h2>I am dl-deal new component </h2>
    <div>Environment: {{environment.envCode}}</div>
    <button mat-button (click)="openSnackBar()">Click me!</button>
    <div>Base Url: {{environment.BASE_URL}}</div>
    <p>
      deal works each time!
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
    DealComponent.prototype.environment;
    /**
     * @type {?}
     * @private
     */
    DealComponent.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2xpYmRlYWwvIiwic291cmNlcyI6WyJsaWIvZGVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWUxRCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBS3hCLFlBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFKMUMsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFLMUIsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDt5QkFDUSw2Q0FBNkM7YUFDdkQ7Ozs7WUFkUSxXQUFXOzs7O0lBZ0JsQixvQ0FBMEI7Ozs7O0lBSWQsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RsLWRlYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5JIGFtIGRsLWRlYWwgbmV3IGNvbXBvbmVudCA8L2gyPlxuICAgIDxkaXY+RW52aXJvbm1lbnQ6IHt7ZW52aXJvbm1lbnQuZW52Q29kZX19PC9kaXY+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiPkNsaWNrIG1lITwvYnV0dG9uPlxuICAgIDxkaXY+QmFzZSBVcmw6IHt7ZW52aXJvbm1lbnQuQkFTRV9VUkx9fTwvZGl2PlxuICAgIDxwPlxuICAgICAgZGVhbCB3b3JrcyBlYWNoIHRpbWUhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFsnOmhvc3R7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtkaXNwbGF5OmJsb2NrfSddXG59KVxuZXhwb3J0IGNsYXNzIERlYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICBcbiAgLy8gZW52Q29kZSA9IGVudmlyb25tZW50LmVudkNvZGU7XG4gIC8vIEJBU0VfVVJMID0gZW52aXJvbm1lbnQuQkFTRV9VUkw7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuICB9XG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKCdIZXkgaXRzIGp1c3QgYSBtZXNzYWdlIGZyb20gbWF0ZXJpYWwnLCAnT0snKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==