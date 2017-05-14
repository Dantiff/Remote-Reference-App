import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule,HttpModule,FormsModule,FlashMessagesModule],
    declarations: [AppComponent],
    providers: [AppService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }