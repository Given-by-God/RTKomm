import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';



import {AppComponent} from './app.component';
import {ApiComponent} from './components/api/api.component';
import {HttpClientModule} from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';
import {DataService} from './service/data.service';


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
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
