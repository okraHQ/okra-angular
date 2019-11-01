/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PUBLIC_KEY_TOKEN } from './okra-token';
import * as i0 from "@angular/core";
import * as i1 from "./okra-token";
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
var Angular8OkraService = /** @class */ (function () {
    function Angular8OkraService(token) {
        this.token = token;
        this.okraPublicKey = token;
    }
    /**
     * @return {?}
     */
    Angular8OkraService.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.okra && typeof window.okra.create === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var link = window.document.createElement('link');
            window.document.head.appendChild(link);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://cdn.okra.ng/okra.min.css');
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://cdn.okra.ng/okra.min.js');
        }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraService.prototype.getOkraOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var okraOptions = {
            env: obj.env,
            url_env: obj.url_env,
            clientName: obj.clientName,
            key: obj.key,
            record_id: obj.record_id,
            callback_url: obj.callback_url,
            user: {},
            products: obj.products,
            onClose: obj.onClose,
            onSuccess: obj.onSuccess
        };
        return okraOptions;
    };
    Angular8OkraService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Angular8OkraService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PUBLIC_KEY_TOKEN,] }] }
    ]; };
    /** @nocollapse */ Angular8OkraService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angular8OkraService_Factory() { return new Angular8OkraService(i0.ɵɵinject(i1.PUBLIC_KEY_TOKEN)); }, token: Angular8OkraService, providedIn: "root" });
    return Angular8OkraService;
}());
export { Angular8OkraService };
if (false) {
    /** @type {?} */
    Angular8OkraService.prototype.okraPublicKey;
    /**
     * @type {?}
     * @private
     */
    Angular8OkraService.prototype.token;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjgtb2tyYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyOC1va3JhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRWhELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQU9FLDZCQUE4QyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7O2dCQUdLLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7O2dCQUV4RCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ25DLFVBQVU7OztZQUFHO2dCQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEdBQWdCOztZQUN2QixXQUFXLEdBQWdCO1lBQy9CLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1lBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1lBQ3hCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWTtZQUM5QixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1NBQ3pCO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0JBbERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7NkNBS2MsTUFBTSxTQUFDLGdCQUFnQjs7OzhCQWhCdEM7Q0E0REMsQUFuREQsSUFtREM7U0FoRFksbUJBQW1COzs7SUFFOUIsNENBQXNCOzs7OztJQUVWLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMgfSBmcm9tICcuL09rcmFPcHRpb25zJztcbmltcG9ydCB7IFBVQkxJQ19LRVlfVE9LRU4gfSBmcm9tICcuL29rcmEtdG9rZW4nO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI4T2tyYVNlcnZpY2Uge1xuXG4gIG9rcmFQdWJsaWNLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBVQkxJQ19LRVlfVE9LRU4pIHByaXZhdGUgdG9rZW46IHN0cmluZykge1xuICAgIHRoaXMub2tyYVB1YmxpY0tleSA9IHRva2VuOyAgIFxuICB9XG5cbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAod2luZG93Lm9rcmEgJiYgdHlwZW9mIHdpbmRvdy5va3JhLmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuIFxuICAgICAgY29uc3QgbGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5taW4uY3NzJyk7XG5cbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2Nkbi5va3JhLm5nL29rcmEubWluLmpzJyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRPa3JhT3B0aW9ucyhvYmo6IE9rcmFPcHRpb25zKTogT2tyYU9wdGlvbnMge1xuICAgIGNvbnN0IG9rcmFPcHRpb25zOiBPa3JhT3B0aW9ucyA9IHtcbiAgICAgIGVudjogb2JqLmVudixcbiAgICAgIHVybF9lbnY6IG9iai51cmxfZW52LFxuICAgICAgY2xpZW50TmFtZTogb2JqLmNsaWVudE5hbWUsXG4gICAgICBrZXk6IG9iai5rZXksXG4gICAgICByZWNvcmRfaWQ6IG9iai5yZWNvcmRfaWQsXG4gICAgICBjYWxsYmFja191cmw6IG9iai5jYWxsYmFja191cmwsXG4gICAgICB1c2VyOiB7fSxcbiAgICAgIHByb2R1Y3RzOiBvYmoucHJvZHVjdHMsXG4gICAgICBvbkNsb3NlOiBvYmoub25DbG9zZSxcbiAgICAgIG9uU3VjY2Vzczogb2JqLm9uU3VjY2Vzc1xuICAgIH07XG4gICAgcmV0dXJuIG9rcmFPcHRpb25zO1xuICB9XG59XG4iXX0=