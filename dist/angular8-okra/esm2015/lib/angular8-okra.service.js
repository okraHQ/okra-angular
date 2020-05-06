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
            link.setAttribute('href', 'https://cdn.okra.ng/okra.css');
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
        console.log(obj);
        /** @type {?} */
        const okraOptions = {
            env: obj.env,
            url_env: obj.url_env,
            clientName: obj.clientName,
            key: obj.key,
            record_id: obj.record_id,
            callback_url: obj.callback_url,
            options: obj.options,
            token: obj.token,
            color: obj.color,
            limit: obj.limit,
            corporate: obj.corporate,
            connectMessage: obj.connectMessage,
            guarantors: obj.guarantors,
            redirect_url: obj.redirect_url,
            logo: obj.logo,
            filter: obj.filter,
            widget_success: obj.widget_success,
            currency: obj.currency,
            exp: obj.currency,
            success_title: obj.success_title,
            success_message: obj.success_message,
            source: "angular",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjgtb2tyYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyOC1va3JhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRWhELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFPWCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTlCLFlBQThDLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7Z0JBQzNELE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDUjs7a0JBR0ssSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUMsQ0FBQzs7a0JBRXBELE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztrQkFDbkMsVUFBVTs7O1lBQUcsR0FBRyxFQUFFO2dCQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQWdCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O2NBQ1gsV0FBVyxHQUFnQjtZQUMvQixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7WUFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztZQUN4QixZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVk7WUFHOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztZQUN4QixjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWM7WUFDbEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWTtZQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjO1lBQ2xDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDakIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhO1lBQ2hDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZTtZQUdwQyxNQUFNLEVBQUUsU0FBUztZQUNqQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztTQUN6QjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7eUNBS2MsTUFBTSxTQUFDLGdCQUFnQjs7Ozs7SUFGcEMsNENBQXNCOzs7OztJQUVWLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMgfSBmcm9tICcuL09rcmFPcHRpb25zJztcbmltcG9ydCB7IFBVQkxJQ19LRVlfVE9LRU4gfSBmcm9tICcuL29rcmEtdG9rZW4nO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI4T2tyYVNlcnZpY2Uge1xuXG4gIG9rcmFQdWJsaWNLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBVQkxJQ19LRVlfVE9LRU4pIHByaXZhdGUgdG9rZW46IHN0cmluZykge1xuICAgIHRoaXMub2tyYVB1YmxpY0tleSA9IHRva2VuO1xuICB9XG5cbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAod2luZG93Lm9rcmEgJiYgdHlwZW9mIHdpbmRvdy5va3JhLmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgICBjb25zdCBsaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9jZG4ub2tyYS5uZy9va3JhLmNzcycpO1xuXG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9jZG4ub2tyYS5uZy9va3JhLm1pbi5qcycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0T2tyYU9wdGlvbnMob2JqOiBPa3JhT3B0aW9ucyk6IE9rcmFPcHRpb25zIHtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGNvbnN0IG9rcmFPcHRpb25zOiBPa3JhT3B0aW9ucyA9IHtcbiAgICAgIGVudjogb2JqLmVudixcbiAgICAgIHVybF9lbnY6IG9iai51cmxfZW52LFxuICAgICAgY2xpZW50TmFtZTogb2JqLmNsaWVudE5hbWUsXG4gICAgICBrZXk6IG9iai5rZXksXG4gICAgICByZWNvcmRfaWQ6IG9iai5yZWNvcmRfaWQsXG4gICAgICBjYWxsYmFja191cmw6IG9iai5jYWxsYmFja191cmwsXG5cbiAgICAgIFxuICAgICAgb3B0aW9uczogb2JqLm9wdGlvbnMsXG4gICAgICB0b2tlbjogb2JqLnRva2VuLFxuICAgICAgY29sb3I6IG9iai5jb2xvcixcbiAgICAgIGxpbWl0OiBvYmoubGltaXQsXG4gICAgICBjb3Jwb3JhdGU6IG9iai5jb3Jwb3JhdGUsXG4gICAgICBjb25uZWN0TWVzc2FnZTogb2JqLmNvbm5lY3RNZXNzYWdlLFxuICAgICAgZ3VhcmFudG9yczogb2JqLmd1YXJhbnRvcnMsXG4gICAgICByZWRpcmVjdF91cmw6IG9iai5yZWRpcmVjdF91cmwsXG4gICAgICBsb2dvOiBvYmoubG9nbyxcbiAgICAgIGZpbHRlcjogb2JqLmZpbHRlcixcbiAgICAgIHdpZGdldF9zdWNjZXNzOiBvYmoud2lkZ2V0X3N1Y2Nlc3MsXG4gICAgICBjdXJyZW5jeTogb2JqLmN1cnJlbmN5LFxuICAgICAgZXhwOiBvYmouY3VycmVuY3ksXG4gICAgICBzdWNjZXNzX3RpdGxlOiBvYmouc3VjY2Vzc190aXRsZSxcbiAgICAgIHN1Y2Nlc3NfbWVzc2FnZTogb2JqLnN1Y2Nlc3NfbWVzc2FnZSxcblxuXG4gICAgICBzb3VyY2U6IFwiYW5ndWxhclwiLFxuICAgICAgcHJvZHVjdHM6IG9iai5wcm9kdWN0cyxcbiAgICAgIG9uQ2xvc2U6IG9iai5vbkNsb3NlLFxuICAgICAgb25TdWNjZXNzOiBvYmoub25TdWNjZXNzXG4gICAgfTtcbiAgICByZXR1cm4gb2tyYU9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==