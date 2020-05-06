/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Angular8OkraService } from '../public-api';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
var Angular8OkraDirective = /** @class */ (function () {
    function Angular8OkraDirective(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    Angular8OkraDirective.prototype.initOkra = /**
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
                        okra = new window.okra.create();
                        okra.open(this._okraOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraDirective.prototype.generateOptions = /**
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
    /**
     * @return {?}
     */
    Angular8OkraDirective.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.initOkra();
                return [2 /*return*/];
            });
        });
    };
    Angular8OkraDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[okraButton]'
                },] }
    ];
    /** @nocollapse */
    Angular8OkraDirective.ctorParameters = function () { return [
        { type: Angular8OkraService }
    ]; };
    Angular8OkraDirective.propDecorators = {
        env: [{ type: Input }],
        url_env: [{ type: Input }],
        clientName: [{ type: Input }],
        record_id: [{ type: Input }],
        callback_url: [{ type: Input }],
        user: [{ type: Input }],
        products: [{ type: Input }],
        token: [{ type: Input }],
        options: [{ type: Input }],
        source: [{ type: Input }],
        color: [{ type: Input }],
        limit: [{ type: Input }],
        corporate: [{ type: Input }],
        connectMessage: [{ type: Input }],
        guarantors: [{ type: Input }],
        redirect_url: [{ type: Input }],
        logo: [{ type: Input }],
        filter: [{ type: Input }],
        widget_success: [{ type: Input }],
        currency: [{ type: Input }],
        exp: [{ type: Input }],
        success_title: [{ type: Input }],
        success_message: [{ type: Input }],
        okraOptions: [{ type: Input }],
        onClose: [{ type: Output }],
        onSuccess: [{ type: Output }],
        buttonClick: [{ type: HostListener, args: ['click',] }]
    };
    return Angular8OkraDirective;
}());
export { Angular8OkraDirective };
if (false) {
    /** @type {?} */
    Angular8OkraDirective.prototype.env;
    /** @type {?} */
    Angular8OkraDirective.prototype.url_env;
    /** @type {?} */
    Angular8OkraDirective.prototype.clientName;
    /** @type {?} */
    Angular8OkraDirective.prototype.record_id;
    /** @type {?} */
    Angular8OkraDirective.prototype.callback_url;
    /** @type {?} */
    Angular8OkraDirective.prototype.user;
    /** @type {?} */
    Angular8OkraDirective.prototype.products;
    /** @type {?} */
    Angular8OkraDirective.prototype.token;
    /** @type {?} */
    Angular8OkraDirective.prototype.options;
    /** @type {?} */
    Angular8OkraDirective.prototype.source;
    /** @type {?} */
    Angular8OkraDirective.prototype.color;
    /** @type {?} */
    Angular8OkraDirective.prototype.limit;
    /** @type {?} */
    Angular8OkraDirective.prototype.corporate;
    /** @type {?} */
    Angular8OkraDirective.prototype.connectMessage;
    /** @type {?} */
    Angular8OkraDirective.prototype.guarantors;
    /** @type {?} */
    Angular8OkraDirective.prototype.redirect_url;
    /** @type {?} */
    Angular8OkraDirective.prototype.logo;
    /** @type {?} */
    Angular8OkraDirective.prototype.filter;
    /** @type {?} */
    Angular8OkraDirective.prototype.widget_success;
    /** @type {?} */
    Angular8OkraDirective.prototype.currency;
    /** @type {?} */
    Angular8OkraDirective.prototype.exp;
    /** @type {?} */
    Angular8OkraDirective.prototype.success_title;
    /** @type {?} */
    Angular8OkraDirective.prototype.success_message;
    /** @type {?} */
    Angular8OkraDirective.prototype.okraOptions;
    /** @type {?} */
    Angular8OkraDirective.prototype.onClose;
    /** @type {?} */
    Angular8OkraDirective.prototype.onSuccess;
    /** @type {?} */
    Angular8OkraDirective.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraDirective.prototype.key;
    /** @type {?} */
    Angular8OkraDirective.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXBELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQXVDRSwrQkFBbUIsaUJBQXNDO1FBQXRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFML0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDLENBQUMsc0JBQXNCOztRQUM1RSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNJLHdDQUFROzs7SUFBZDs7Ozs7O3dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7S0FDOUI7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixHQUFRO1FBQXhCLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7O1FBQUc7WUFDMUIsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUc7WUFDNUIsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7SUFHSywyQ0FBVzs7O0lBRGpCOzs7Z0JBRUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7O0tBQ2pCOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFUUSxtQkFBbUI7OztzQkFhekIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFHTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUdMLEtBQUs7MEJBQ0wsTUFBTTs0QkFDTixNQUFNOzhCQTZCTixZQUFZLFNBQUMsT0FBTzs7SUFLdkIsNEJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWpFWSxxQkFBcUI7OztJQUVoQyxvQ0FBcUI7O0lBQ3JCLHdDQUF5Qjs7SUFDekIsMkNBQTRCOztJQUM1QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBRzVCLHNDQUF3Qjs7SUFDeEIsd0NBQXNCOztJQUN0Qix1Q0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIsc0NBQXdCOztJQUN4QiwwQ0FBMEI7O0lBQzFCLCtDQUFpQzs7SUFDakMsMkNBQXlCOztJQUN6Qiw2Q0FBK0I7O0lBQy9CLHFDQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQiwrQ0FBaUM7O0lBQ2pDLHlDQUEyQjs7SUFDM0Isb0NBQXNCOztJQUN0Qiw4Q0FBZ0M7O0lBQ2hDLGdEQUFrQzs7SUFHbEMsNENBQWtDOztJQUNsQyx3Q0FBK0Q7O0lBQy9ELDBDQUFpRTs7SUFDakUsNkNBQWlEOztJQUNqRCxvQ0FBWTs7SUFFQSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPa3JhT3B0aW9ucywgUHJpdmF0ZU9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBBbmd1bGFyOE9rcmFTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIG9rcmE6IGFueVxufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW29rcmFCdXR0b25dJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI4T2tyYURpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybF9lbnY6IHN0cmluZztcbiAgQElucHV0KCkgY2xpZW50TmFtZTogbnVtYmVyO1xuICBASW5wdXQoKSByZWNvcmRfaWQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXI6IHt9O1xuICBASW5wdXQoKSBwcm9kdWN0czogc3RyaW5nW107XG5cblxuICBASW5wdXQoKSB0b2tlbiA6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9ucyA6IHt9O1xuICBASW5wdXQoKSBzb3VyY2UgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yIDogc3RyaW5nO1xuICBASW5wdXQoKSBsaW1pdCA6IHN0cmluZztcbiAgQElucHV0KCkgY29ycG9yYXRlIDogbnVsbDtcbiAgQElucHV0KCkgY29ubmVjdE1lc3NhZ2UgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGd1YXJhbnRvcnMgOiB7fTtcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsIDogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvIDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXIgOiB7fTtcbiAgQElucHV0KCkgd2lkZ2V0X3N1Y2Nlc3MgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1cnJlbmN5IDogc3RyaW5nO1xuICBASW5wdXQoKSBleHAgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NfdGl0bGUgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NfbWVzc2FnZSA6IHN0cmluZztcblxuXG4gIEBJbnB1dCgpIG9rcmFPcHRpb25zOiBPa3JhT3B0aW9ucztcbiAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgQE91dHB1dCgpIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIF9va3JhT3B0aW9uczogUGFydGlhbDxQcml2YXRlT2tyYU9wdGlvbnM+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBva3JhV2lkZ2V0U2VydmljZTogQW5ndWxhcjhPa3JhU2VydmljZSkge1xuICAgIHRoaXMua2V5ID0gb2tyYVdpZGdldFNlcnZpY2Uub2tyYVB1YmxpY0tleTtcbiAgIH1cbiAgYXN5bmMgaW5pdE9rcmEoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcyk7XG4gICAgYXdhaXQgdGhpcy5va3JhV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgY29uc3Qgb2tyYSA9IG5ldyB3aW5kb3cub2tyYS5jcmVhdGUoKTtcbiAgICBva3JhLm9wZW4odGhpcy5fb2tyYU9wdGlvbnMpO1xuICB9XG5cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMgPSB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmdldE9rcmFPcHRpb25zKG9iaik7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uQ2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuXG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25TdWNjZXNzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLmluaXRPa3JhKCk7XG4gIH1cblxufVxuIl19