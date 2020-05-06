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
export class Angular8OkraComponent {
    /**
     * @param {?} okraWidgetService
     */
    constructor(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    initOkra() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!Angular8OkraComponent} */ function* () {
            this.generateOptions(this);
            yield this.okraWidgetService.loadScript();
            /** @type {?} */
            const okra = new window.okra.create();
            okra.open(this._okraOptions);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
        this._okraOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._okraOptions.onSuccess = (/**
         * @return {?}
         */
        () => {
            if (this.onSuccess.observers.length) {
                this.onSuccess.emit();
            }
        });
    }
}
Angular8OkraComponent.decorators = [
    { type: Component, args: [{
                selector: 'okra-button',
                template: `<button [ngClass]="customClass" [ngStyle]="customStyle" (click)="initOkra()"><ng-content></ng-content></button>`
            }] }
];
/** @nocollapse */
Angular8OkraComponent.ctorParameters = () => [
    { type: Angular8OkraService }
];
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
    onSuccess: [{ type: Output }]
};
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
    Angular8OkraComponent.prototype.token;
    /** @type {?} */
    Angular8OkraComponent.prototype.options;
    /** @type {?} */
    Angular8OkraComponent.prototype.source;
    /** @type {?} */
    Angular8OkraComponent.prototype.color;
    /** @type {?} */
    Angular8OkraComponent.prototype.limit;
    /** @type {?} */
    Angular8OkraComponent.prototype.corporate;
    /** @type {?} */
    Angular8OkraComponent.prototype.connectMessage;
    /** @type {?} */
    Angular8OkraComponent.prototype.guarantors;
    /** @type {?} */
    Angular8OkraComponent.prototype.redirect_url;
    /** @type {?} */
    Angular8OkraComponent.prototype.logo;
    /** @type {?} */
    Angular8OkraComponent.prototype.filter;
    /** @type {?} */
    Angular8OkraComponent.prototype.widget_success;
    /** @type {?} */
    Angular8OkraComponent.prototype.currency;
    /** @type {?} */
    Angular8OkraComponent.prototype.exp;
    /** @type {?} */
    Angular8OkraComponent.prototype.success_title;
    /** @type {?} */
    Angular8OkraComponent.prototype.success_message;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsdUJBRUM7OztJQURDLHdCQUFTOztBQVNYLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFxQ2hDLFlBQW1CLGlCQUFzQztRQUF0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO1FBTC9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQyxDQUFDLHNCQUFzQjs7UUFDNUUsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSy9ELElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDSSxRQUFROztZQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7O2tCQUNwQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7O1FBQUcsR0FBRyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFHLEdBQUcsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLGlIQUFpSDthQUM1SDs7OztZQVZRLG1CQUFtQjs7O2tCQWN6QixLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFHTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUdMLEtBQUs7c0JBQ0wsTUFBTTt3QkFDTixNQUFNOzs7O0lBL0JQLG9DQUFxQjs7SUFDckIsd0NBQXlCOztJQUN6QiwyQ0FBNEI7O0lBQzVCLDRDQUF5Qjs7SUFDekIsNENBQXlCOztJQUN6QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBRzVCLHNDQUF3Qjs7SUFDeEIsd0NBQXNCOztJQUN0Qix1Q0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIsc0NBQXdCOztJQUN4QiwwQ0FBMEI7O0lBQzFCLCtDQUFpQzs7SUFDakMsMkNBQXlCOztJQUN6Qiw2Q0FBK0I7O0lBQy9CLHFDQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQiwrQ0FBaUM7O0lBQ2pDLHlDQUEyQjs7SUFDM0Isb0NBQXNCOztJQUN0Qiw4Q0FBZ0M7O0lBQ2hDLGdEQUFrQzs7SUFHbEMsNENBQWtDOztJQUNsQyx3Q0FBK0Q7O0lBQy9ELDBDQUFpRTs7SUFDakUsNkNBQWlEOztJQUNqRCxvQ0FBWTs7SUFFQSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPa3JhT3B0aW9ucywgUHJpdmF0ZU9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBBbmd1bGFyOE9rcmFTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIG9rcmE6IGFueVxufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2tyYS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gW25nQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIiBbbmdTdHlsZV09XCJjdXN0b21TdHlsZVwiIChjbGljayk9XCJpbml0T2tyYSgpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhcjhPa3JhQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBlbnY6IHN0cmluZztcbiAgQElucHV0KCkgdXJsX2Vudjogc3RyaW5nO1xuICBASW5wdXQoKSBjbGllbnROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbVN0eWxlOiB7fTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHt9O1xuICBASW5wdXQoKSByZWNvcmRfaWQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXI6IHt9O1xuICBASW5wdXQoKSBwcm9kdWN0czogc3RyaW5nW107XG5cblxuICBASW5wdXQoKSB0b2tlbiA6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9ucyA6IHt9O1xuICBASW5wdXQoKSBzb3VyY2UgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yIDogc3RyaW5nO1xuICBASW5wdXQoKSBsaW1pdCA6IHN0cmluZztcbiAgQElucHV0KCkgY29ycG9yYXRlIDogbnVsbDtcbiAgQElucHV0KCkgY29ubmVjdE1lc3NhZ2UgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGd1YXJhbnRvcnMgOiB7fTtcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsIDogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvIDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXIgOiB7fTtcbiAgQElucHV0KCkgd2lkZ2V0X3N1Y2Nlc3MgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1cnJlbmN5IDogc3RyaW5nO1xuICBASW5wdXQoKSBleHAgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NfdGl0bGUgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NfbWVzc2FnZSA6IHN0cmluZztcblxuXG4gIEBJbnB1dCgpIG9rcmFPcHRpb25zOiBPa3JhT3B0aW9ucztcbiAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgQE91dHB1dCgpIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIF9va3JhT3B0aW9uczogUGFydGlhbDxQcml2YXRlT2tyYU9wdGlvbnM+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBva3JhV2lkZ2V0U2VydmljZTogQW5ndWxhcjhPa3JhU2VydmljZSkge1xuICAgIHRoaXMua2V5ID0gb2tyYVdpZGdldFNlcnZpY2Uub2tyYVB1YmxpY0tleTtcbiAgIH1cbiAgYXN5bmMgaW5pdE9rcmEoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcyk7XG4gICAgYXdhaXQgdGhpcy5va3JhV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgY29uc3Qgb2tyYSA9IG5ldyB3aW5kb3cub2tyYS5jcmVhdGUoKTtcbiAgICBva3JhLm9wZW4odGhpcy5fb2tyYU9wdGlvbnMpO1xuICB9XG5cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMgPSB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmdldE9rcmFPcHRpb25zKG9iaik7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uQ2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuXG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25TdWNjZXNzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdCgpO1xuICAgICAgfSBcbiAgICB9O1xuICB9XG59XG4iXX0=