import { Component, OnInit, OnDestroy } from '@angular/core';
import { MDL } from '../MDLUpdate';  
import { ConfigService } from '../config.service';
import { ChatSocketService} from '../chat-socket.service';

declare const FB: any;

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [MDL]
})
export class LoginComponent {
    title = ConfigService.AppTitle; 
    status = '';
    uid = '';
    name = '';
    picture = '';
    nickname = '';
    action = 'login';
    socketListener;
    FB: any; 

    constructor(
        private chatService: ChatSocketService) {
    }

    onLoginClick() {
        this.status = 'waiting...';
        FB.login();
    }

    onLogoutClick() {
        FB.logout();
    }

    onSubmit() {
        this.chatService.login(this.nickname, this.name, this.picture);
    }


    statusChangeCallback(resp) {
        this.status = resp.status;       
        if (resp.status === 'connected') {
            this.uid = resp.authResponse.userID;
            FB.api('/me', response => { this.nickname = this.name = response.name;});
            FB.api('/' + this.uid +'/picture', response => { this.picture = response.data.url; });
        } else if (resp.status === 'not_authorized') {
        } else {
        }
    };

    ngOnInit() {       
        this.FB = FB.init({
            //appId: '1603022526661934', //release
            appId: '1603523949945125', //debug
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.7', // use graph api version 2.5
            status: true // check fb status automatically
        });
        FB.Event.subscribe('auth.statusChange', response => { this.statusChangeCallback(response); });
        FB.getLoginStatus(response => { this.statusChangeCallback(response); });
    }

    ngOnDestroy() {        
    }

}
