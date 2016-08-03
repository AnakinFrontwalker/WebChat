import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { Title } from '@angular/platform-browser';
import { ConfigService } from './app/config.service';
import { ChatSocketService } from './app/chat-socket.service';
import {disableDeprecatedForms, provideForms} from '@angular/forms'; 

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    ConfigService, Title, ChatSocketService,
])
    .catch(err => console.error(err));

console.log('initialize...');