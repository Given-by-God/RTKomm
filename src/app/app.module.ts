import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ApiComponent} from './api.component';
import {HttpClientModule} from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        ApiComponent,
    ],
    imports: [
        HttpClientModule,
        HttpModule,

        BrowserModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
