/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DealComponent } from './deal.component';
import { APP_CONFIG, environment } from '../environment';
import { DealDetailsComponent } from './deal-details/deal-details.component';
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
        { type: NgModule, args: [{
                    declarations: components,
                    imports: [],
                    exports: components
                },] }
    ];
    return DealModule;
}());
export { DealModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWFsLyIsInNvdXJjZXMiOlsibGliL2RlYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7SUFFekUsVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDO0FBQ3REO0lBQUE7SUFhQSxDQUFDOzs7Ozs7SUFOZSxrQkFBTzs7Ozs7SUFBckIsVUFBc0IsT0FBWSxFQUFFLFFBQWM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7SUFDSixDQUFDOztnQkFaRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxVQUFVO2lCQUNwQjs7SUFRRCxpQkFBQztDQUFBLEFBYkQsSUFhQztTQVBZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVhbENvbXBvbmVudCB9IGZyb20gJy4vZGVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQVBQX0NPTkZJRywgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBEZWFsRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGVhbC1kZXRhaWxzL2RlYWwtZGV0YWlscy5jb21wb25lbnQnO1xuXG52YXIgY29tcG9uZW50cyA9IFtEZWFsQ29tcG9uZW50LCBEZWFsRGV0YWlsc0NvbXBvbmVudF1cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBjb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIERlYWxNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZW52Q29kZTogYW55LCBkZWZhdWx0cz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIE9iamVjdC5hc3NpZ24oQVBQX0NPTkZJRywgZW52aXJvbm1lbnRbZW52Q29kZV0pXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWFsTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19