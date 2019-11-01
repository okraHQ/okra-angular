/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Angular8OkraService } from '../public-api';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
var Angular8OkraComponent = /** @class */ (function () {
    function Angular8OkraComponent(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    Angular8OkraComponent.prototype.initOkra = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var okra;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.generateOptions(this);
                        return [4 /*yield*/, this.okraWidgetService.loadScript()];
                    case 1:
                        _a.sent();
                        okra = new window.okra.create(this._okraOptions);
                        okra.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraComponent.prototype.generateOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
        this._okraOptions.onClose = (/**
         * @return {?}
         */
        function () {
            if (_this.onClose.observers.length) {
                _this.onClose.emit();
            }
        });
        this._okraOptions.onSuccess = (/**
         * @return {?}
         */
        function () {
            if (_this.onSuccess.observers.length) {
                _this.onSuccess.emit();
            }
        });
    };
    Angular8OkraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'okra-button',
                    template: "<button [ngClass]=\"customClass\" [ngStyle]=\"customStyle\" (click)=\"initOkra()\"><ng-content></ng-content></button>"
                }] }
    ];
    /** @nocollapse */
    Angular8OkraComponent.ctorParameters = function () { return [
        { type: Angular8OkraService }
    ]; };
    Angular8OkraComponent.propDecorators = {
        env: [{ type: Input }],
        url_env: [{ type: Input }],
        clientName: [{ type: Input }],
        customStyle: [{ type: Input }],
        customClass: [{ type: Input }],
        record_id: [{ type: Input }],
        callback_url: [{ type: Input }],
        user: [{ type: Input }],
        products: [{ type: Input }],
        okraOptions: [{ type: Input }],
        onClose: [{ type: Output }],
        onSuccess: [{ type: Output }]
    };
    return Angular8OkraComponent;
}());
export { Angular8OkraComponent };
if (false) {
    /** @type {?} */
    Angular8OkraComponent.prototype.env;
    /** @type {?} */
    Angular8OkraComponent.prototype.url_env;
    /** @type {?} */
    Angular8OkraComponent.prototype.clientName;
    /** @type {?} */
    Angular8OkraComponent.prototype.customStyle;
    /** @type {?} */
    Angular8OkraComponent.prototype.customClass;
    /** @type {?} */
    Angular8OkraComponent.prototype.record_id;
    /** @type {?} */
    Angular8OkraComponent.prototype.callback_url;
    /** @type {?} */
    Angular8OkraComponent.prototype.user;
    /** @type {?} */
    Angular8OkraComponent.prototype.products;
    /** @type {?} */
    Angular8OkraComponent.prototype.okraOptions;
    /** @type {?} */
    Angular8OkraComponent.prototype.onClose;
    /** @type {?} */
    Angular8OkraComponent.prototype.onSuccess;
    /** @type {?} */
    Angular8OkraComponent.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraComponent.prototype.key;
    /** @type {?} */
    Angular8OkraComponent.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsdUJBRUM7OztJQURDLHdCQUFTOztBQUlYO0lBc0JFLCtCQUFtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUwvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7O1FBQzVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsvRCxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0ksd0NBQVE7OztJQUFkOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFDcEMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUNiOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBUTtRQUF4QixpQkFhQztRQVpDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87OztRQUFHO1lBQzFCLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFHO1lBQzVCLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsdUhBQWlIO2lCQUM1SDs7OztnQkFWUSxtQkFBbUI7OztzQkFjekIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxNQUFNOzRCQUNOLE1BQU07O0lBNEJULDRCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0F6Q1kscUJBQXFCOzs7SUFFaEMsb0NBQXFCOztJQUNyQix3Q0FBeUI7O0lBQ3pCLDJDQUE0Qjs7SUFDNUIsNENBQXlCOztJQUN6Qiw0Q0FBeUI7O0lBQ3pCLDBDQUEyQjs7SUFDM0IsNkNBQThCOztJQUM5QixxQ0FBa0I7O0lBQ2xCLHlDQUE0Qjs7SUFDNUIsNENBQWtDOztJQUNsQyx3Q0FBK0Q7O0lBQy9ELDBDQUFpRTs7SUFDakUsNkNBQWlEOztJQUNqRCxvQ0FBWTs7SUFFQSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPa3JhT3B0aW9ucywgUHJpdmF0ZU9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBBbmd1bGFyOE9rcmFTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIG9rcmE6IGFueVxufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2tyYS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gW25nQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIiBbbmdTdHlsZV09XCJjdXN0b21TdHlsZVwiIChjbGljayk9XCJpbml0T2tyYSgpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhcjhPa3JhQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBlbnY6IHN0cmluZztcbiAgQElucHV0KCkgdXJsX2Vudjogc3RyaW5nO1xuICBASW5wdXQoKSBjbGllbnROYW1lOiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1c3RvbVN0eWxlOiB7fTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHt9O1xuICBASW5wdXQoKSByZWNvcmRfaWQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXI6IHt9O1xuICBASW5wdXQoKSBwcm9kdWN0czogc3RyaW5nW107XG4gIEBJbnB1dCgpIG9rcmFPcHRpb25zOiBPa3JhT3B0aW9ucztcbiAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgQE91dHB1dCgpIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIF9va3JhT3B0aW9uczogUGFydGlhbDxQcml2YXRlT2tyYU9wdGlvbnM+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBva3JhV2lkZ2V0U2VydmljZTogQW5ndWxhcjhPa3JhU2VydmljZSkge1xuICAgIHRoaXMua2V5ID0gb2tyYVdpZGdldFNlcnZpY2Uub2tyYVB1YmxpY0tleTtcbiAgIH1cbiAgYXN5bmMgaW5pdE9rcmEoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcyk7XG4gICAgYXdhaXQgdGhpcy5va3JhV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgY29uc3Qgb2tyYSA9IG5ldyB3aW5kb3cub2tyYS5jcmVhdGUodGhpcy5fb2tyYU9wdGlvbnMpO1xuICAgIG9rcmEub3BlbigpO1xuICB9XG5cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMgPSB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmdldE9rcmFPcHRpb25zKG9iaik7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uQ2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuXG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25TdWNjZXNzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuICB9XG59XG4iXX0=