import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from "./app.route";
import { HTTP_PROVIDERS,  RequestOptions } from "@angular/http";
import { enableProdMode } from '@angular/core';
import { AuthService } from './services/authService';
import { AuthGuard } from './services/authGuard';
import { BroadcastService } from './services/broadcastService';
import { ReferenceService } from './services/referenceService';
import {ExRequestOptions} from './services/exRequestOptions';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  AuthService,
  AuthGuard,
  BroadcastService,
  ReferenceService,
  {provide:RequestOptions, useClass: ExRequestOptions}
])
.catch(err => console.error(err));