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
export class Angular8OkraService {
    /**
     * @param {?} token
     */
    constructor(token) {
        this.token = token;
        this.okraPublicKey = token;
    }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (window.okra && typeof window.okra.create === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            const link = window.document.createElement('link');
            window.document.head.appendChild(link);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://cdn.okra.ng/okra.min.css');
            /** @type {?} */
            const script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            const onLoadFunc = (/**
             * @return {?}
             */
            () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://cdn.okra.ng/okra.min.js');
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getOkraOptions(obj) {
        /** @type {?} */
        const okraOptions = {
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
    }
}
Angular8OkraService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Angular8OkraService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PUBLIC_KEY_TOKEN,] }] }
];
/** @nocollapse */ Angular8OkraService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angular8OkraService_Factory() { return new Angular8OkraService(i0.ɵɵinject(i1.PUBLIC_KEY_TOKEN)); }, token: Angular8OkraService, providedIn: "root" });
if (false) {
    /** @type {?} */
    Angular8OkraService.prototype.okraPublicKey;
    /**
     * @type {?}
     * @private
     */
    Angular8OkraService.prototype.token;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjgtb2tyYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyOC1va3JhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRWhELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFPWCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTlCLFlBQThDLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7Z0JBQzNELE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDUjs7a0JBR0ssSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQzs7a0JBRXhELE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztrQkFDbkMsVUFBVTs7O1lBQUcsR0FBRyxFQUFFO2dCQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQWdCOztjQUN2QixXQUFXLEdBQWdCO1lBQy9CLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1lBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1lBQ3hCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWTtZQUM5QixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1NBQ3pCO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7O1lBbERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt5Q0FLYyxNQUFNLFNBQUMsZ0JBQWdCOzs7OztJQUZwQyw0Q0FBc0I7Ozs7O0lBRVYsb0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPa3JhT3B0aW9ucyB9IGZyb20gJy4vT2tyYU9wdGlvbnMnO1xuaW1wb3J0IHsgUFVCTElDX0tFWV9UT0tFTiB9IGZyb20gJy4vb2tyYS10b2tlbic7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIG9rcmE6IGFueVxufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjhPa3JhU2VydmljZSB7XG5cbiAgb2tyYVB1YmxpY0tleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUFVCTElDX0tFWV9UT0tFTikgcHJpdmF0ZSB0b2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5va3JhUHVibGljS2V5ID0gdG9rZW47ICAgXG4gIH1cblxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh3aW5kb3cub2tyYSAmJiB0eXBlb2Ygd2luZG93Lm9rcmEuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gXG4gICAgICBjb25zdCBsaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9jZG4ub2tyYS5uZy9va3JhLm1pbi5jc3MnKTtcblxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5taW4uanMnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9rcmFPcHRpb25zKG9iajogT2tyYU9wdGlvbnMpOiBPa3JhT3B0aW9ucyB7XG4gICAgY29uc3Qgb2tyYU9wdGlvbnM6IE9rcmFPcHRpb25zID0ge1xuICAgICAgZW52OiBvYmouZW52LFxuICAgICAgdXJsX2Vudjogb2JqLnVybF9lbnYsXG4gICAgICBjbGllbnROYW1lOiBvYmouY2xpZW50TmFtZSxcbiAgICAgIGtleTogb2JqLmtleSxcbiAgICAgIHJlY29yZF9pZDogb2JqLnJlY29yZF9pZCxcbiAgICAgIGNhbGxiYWNrX3VybDogb2JqLmNhbGxiYWNrX3VybCxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgcHJvZHVjdHM6IG9iai5wcm9kdWN0cyxcbiAgICAgIG9uQ2xvc2U6IG9iai5vbkNsb3NlLFxuICAgICAgb25TdWNjZXNzOiBvYmoub25TdWNjZXNzXG4gICAgfTtcbiAgICByZXR1cm4gb2tyYU9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==