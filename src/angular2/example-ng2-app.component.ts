import {Component, NgZone, Inject} from '@angular/core';
import {showFrameworkObservable, getBorder} from '../common/colored-border.js';

@Component({
  selector: 'example-ng2-app',
  template: `
    <div [style.border]="border">
      <div *ngIf="showFramework">
        (built with Angular 2)
      </div>
      <div class="container">
        <h5>
          This is just a hello world from Angular 2.
        </h5>
        <div>
          Nothing fancy, just shows off how Angular 2 apps
          can easily fit into single-spa.
        </div>
      </div>
    </div>
  `,
})
export class ExampleNg2App {
  public border:String;
  public showFramework:Boolean;
  subscription: any;
  ngZone: any;

  constructor(@Inject(NgZone) ngZone:NgZone) {
    this.showFramework = false;
    this.ngZone = ngZone;
  }

  ngOnInit() {
    this.subscription = showFrameworkObservable.subscribe(showFramework => {
      this.ngZone.run(() => {
        this.border = showFramework ? getBorder('angular2') : ``;
        this.showFramework = showFramework;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.dispose();
  }
}
