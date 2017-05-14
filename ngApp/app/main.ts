import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {appRouterProviders} from "./app.route";
import {HTTP_PROVIDERS} from "@angular/http";
import {enableProdMode} from '@angular/core';
import {AppService} from './services/service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  AppService
])
.catch(err => console.error(err));