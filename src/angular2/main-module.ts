import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExampleNg2App} from './example-ng2-app.component.ts';
import {enableProdMode} from '@angular/core';

try {
    enableProdMode();
} catch (err) {
    console.info('EnableProdMode already set')
}

@NgModule({
    imports: [BrowserModule],
    declarations: [ExampleNg2App],
    bootstrap: [ExampleNg2App]
})
export default class MainModule {
}
