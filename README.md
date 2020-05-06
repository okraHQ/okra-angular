# okra-angular
> This is an angular module that abstracts the complexity of using okra with Angular2+.

## USAGE

### 1. Install the module
```sh
npm install --save angular8-okra
```

### 2. Import the module
In your `app.module.ts` or any module where the component or directive would be used like so:

```ts
import { NgModule } from '@angular/core';

import { Angular8OkraModule } from 'angular8-okra';
...

@NgModule({
  imports: [
    Angular8OkraModule.forRoot('public_key_xxxxxxxxxxxxxxxxxxxxxxxx'),
  ]
})

export class AppModule {}
```

### 3. Implement in your project
There are two available options

* **AngularOkraComponent**: Renders a button which when clicked loads okra Inline
  ```html
    <okra-button
      [customStyle]="{'font-size.px':14, 'color' : 'green', 'background-color' : 'coral'}"
      [clientName]="'bassey'" 
      [env]="'sandbox'" 
      [callback_url]="'www.my-webhook.com'"
      [products]="['auth', 'transactions', 'balance', 'income', 'identity']" (onClose)="okraCancel()"
      (onSuccess)="okraDone()">
      Open Okra
    </okra-button>
  ```

*  **AngularOkraDirective**: A directive that loads okra inline when clicked
```html
  <button
    okraButton
      [clientName]="'bassey'" 
      [env]="'sandbox'" 
      [callback_url]="'www.my-webhook.com'"
      [products]="['auth', 'transactions', 'balance', 'income', 'identity']" (onClose)="okraCancel()"
      (onSuccess)="okraDone()">
    Open okra
  </button>
```

And then in your `component.ts`
```ts
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    reference = '';
    constructor() {}

    okraInit() {
      console.log('Okra initialized');
    }

    okraDone(ref: any) {
      this.title = 'Okra successfull';
      console.log(this.title, ref);
    }

    okraCancel() {
      console.log('Okra cancelled');
    }
  }
  
```


## OkraOptions

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `key `               | `String`       | true                |                     | Your public key from your Okra Dashboard.
|  `token `             | `String`       | true                |                     | Your token from your Okra Dashboard.
|  `env `               | `String`       | false               |`production`         | production(live)/production-sandbox (test)
|  `products`           | `Array`        | true                | `['Auth']`          | The Okra products you want to use with the widget.
|  `logo `              | `String(URL)`  | false               | Okra's Logo         | 
|  `clientName `        | `String`       | false               | Your Company's name | Name on the widget 
|  `color`              | `HEX   `       | false               | #3AB795             | Theme on the widget 
|  `limit`              | `Number`       | false               | 24                  | Statement length
|  `filter`             | `Object`       | false               |                     | Filter for widget
|  `isCorporate`        | `Boolen`       | false               | `false`             | Corporate or Individual account
|  `connectMessage`     | `String`       | false               |                     | Instruction to connnect account
|  `guarantors          | `Object`       | false               |                     | 
|  `widget_success`     | `String`       | false               |                     | Widget Success Message
|  `widget_failed`      | `String`       | false               |                     | Widget Failed Message
|  `callback_url`       | `String(Url)`  | false               |                     | 
|  `currency`           | `String`       | false               | NGN                 | Wallet to bill
|  `exp`                | `Date`         | false               | Won't expire        | Expirary date of widget
|  `options`            | `Object`       | false               |                     | You can pass a object custom values eg id
|  `onSuccess`          | `Function`     | false               |                     | Action to perform after widget is successful
|  `onClose`            | `Function`     | false               |                     | Action to perform if widget is closed






> For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
