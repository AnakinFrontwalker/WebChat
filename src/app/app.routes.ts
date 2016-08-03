import { provideRouter, RouterConfig } from '@angular/router';

import { ChatFrameComponent }  from './chat-frame/chat-frame.component';
import { LoginComponent }    from './login/login.component';
import { ConnectionComponent }    from './connection/connection.component';

const routes: RouterConfig = [
    { path: 'chat', component: ChatFrameComponent },
    { path: 'connection', component: ConnectionComponent },
    { path: '', component: LoginComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];