"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MDLUpdate_1 = require('../MDLUpdate');
var config_service_1 = require('../config.service');
var LoginComponent = (function () {
    function LoginComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.title = config_service_1.ConfigService.AppTitle;
        this.status = '';
        this.uid = '';
        this.name = '';
        this.picture = '';
        this.nickname = '';
        this.action = 'login';
    }
    LoginComponent.prototype.onLoginClick = function () {
        this.status = 'waiting...';
        FB.login();
    };
    LoginComponent.prototype.onLogoutClick = function () {
        FB.logout();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.action = 'connecting';
        this.chatService.login(this.nickname);
    };
    LoginComponent.prototype.statusChangeCallback = function (resp) {
        var _this = this;
        this.status = resp.status;
        if (resp.status === 'connected') {
            this.uid = resp.authResponse.userID;
            FB.api('/me', function (response) { _this.nickname = _this.name = response.name; });
            FB.api('/' + this.uid + '/picture', function (response) { _this.picture = response.data.url; });
        }
        else if (resp.status === 'not_authorized') {
        }
        else {
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FB = FB.init({
            appId: '1603022526661934',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.7',
            status: true // check fb status automatically
        });
        // navigate to chat if we're ready.
        this.socketListener = this.chatService.getListener('status').subscribe(function (status) {
            if (status == 'ready')
                _this.router.navigate(['/chat']);
        });
        FB.Event.subscribe('auth.statusChange', function (response) { _this.statusChangeCallback(response); });
        FB.getLoginStatus(function (response) { _this.statusChangeCallback(response); });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.socketListener.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('nicknameField')
    ], LoginComponent.prototype, "nicknameInput", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
            directives: [MDLUpdate_1.MDL]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
