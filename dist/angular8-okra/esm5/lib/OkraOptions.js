/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function OkraOptions() { }
if (false) {
    /** @type {?} */
    OkraOptions.prototype.env;
    /** @type {?|undefined} */
    OkraOptions.prototype.clientName;
    /** @type {?|undefined} */
    OkraOptions.prototype.key;
    /** @type {?} */
    OkraOptions.prototype.url_env;
    /** @type {?} */
    OkraOptions.prototype.record_id;
    /** @type {?} */
    OkraOptions.prototype.callback_url;
    /** @type {?|undefined} */
    OkraOptions.prototype.user;
    /** @type {?} */
    OkraOptions.prototype.products;
    /** @type {?} */
    OkraOptions.prototype.onClose;
    /** @type {?} */
    OkraOptions.prototype.onSuccess;
}
/**
 * @record
 */
export function PrivateOkraOptions() { }
if (false) {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * \@param response?: The server response
     * @type {?}
     */
    PrivateOkraOptions.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateOkraOptions.prototype.onClose;
    /**
     * A function to be called when payment is about to begin
     * @type {?}
     */
    PrivateOkraOptions.prototype.onSuccess;
}
/**
 * @record
 */
export function PrivateOkraOptionsWithEmitters() { }
if (false) {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * @type {?}
     */
    PrivateOkraOptionsWithEmitters.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateOkraOptionsWithEmitters.prototype.onClose;
    /**
     * A function to be called when payment is about to begin
     * @type {?}
     */
    PrivateOkraOptionsWithEmitters.prototype.init;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2tyYU9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL09rcmFPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxpQ0FxQkM7OztJQW5CQywwQkFBWTs7SUFFWixpQ0FBb0I7O0lBRXBCLDBCQUFhOztJQUViLDhCQUFnQjs7SUFFaEIsZ0NBQWtCOztJQUVsQixtQ0FBcUI7O0lBRXJCLDJCQUFVOztJQUVWLCtCQUFvQjs7SUFFcEIsOEJBQWE7O0lBRWIsZ0NBQWU7Ozs7O0FBR2pCLHdDQWVDOzs7Ozs7OztJQVRDLHNDQUFtQzs7Ozs7SUFJbkMscUNBQW9COzs7OztJQUlwQix1Q0FBc0I7Ozs7O0FBR3hCLG9EQWNDOzs7Ozs7O0lBVEMsa0RBQTRCOzs7OztJQUk1QixpREFBNEI7Ozs7O0lBSTVCLDhDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPa3JhT3B0aW9ucyB7XHJcbiAgXHJcbiAgZW52OiBzdHJpbmc7XHJcblxyXG4gIGNsaWVudE5hbWU/OiBzdHJpbmc7XHJcbiAgXHJcbiAga2V5Pzogc3RyaW5nO1xyXG5cclxuICB1cmxfZW52OiBzdHJpbmc7XHJcbiAgXHJcbiAgcmVjb3JkX2lkOiBzdHJpbmc7XHJcbiAgXHJcbiAgY2FsbGJhY2tfdXJsOiBzdHJpbmc7XHJcbiAgXHJcbiAgdXNlcj86IHt9O1xyXG4gIFxyXG4gIHByb2R1Y3RzOiBzdHJpbmcgW107XHJcblxyXG4gIG9uQ2xvc2U6IGFueTtcclxuXHJcbiAgb25TdWNjZXNzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpdmF0ZU9rcmFPcHRpb25zIGV4dGVuZHMgT2tyYU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxyXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgKi9cclxuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHBheW1lbnQgaXMgYWJvdXQgdG8gYmVnaW5cclxuICAgKi9cclxuICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpdmF0ZU9rcmFPcHRpb25zV2l0aEVtaXR0ZXJzIGV4dGVuZHMgT2tyYU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxyXG4gICAqL1xyXG4gIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxyXG4gICAqL1xyXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHBheW1lbnQgaXMgYWJvdXQgdG8gYmVnaW5cclxuICAgKi9cclxuICBpbml0OiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbn1cclxuXHJcblxyXG4iXX0=