"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var ChatSocketService = (function () {
    function ChatSocketService(router) {
        var _this = this;
        this.router = router;
        this.url = 'http://vsr.pl:3000';
        this.color = 'FFFFFF';
        console.log("** Chat-Socket Constructor (Should be 1)");
        this.socket = io(this.url);
        this.router.navigate(['']);
        this.socket.on('disconnect', function () {
            console.log("** Disconnect");
            if (_this.nickname)
                _this.router.navigate(['/connect']);
            else
                _this.router.navigate(['']);
        });
        this.socket.on('status', function (status) {
            console.log("** Status: " + status);
            if (status == 'ready')
                _this.router.navigate(['/chat']);
        });
        this.socket.on('connect', function () {
            console.log("** Connect");
            if (_this.nickname) {
                _this.router.navigate(['/connect']);
                _this.autoLogin();
            }
        });
    }
    ChatSocketService.prototype.sendMessage = function (type, message) {
        this.socket.emit(type, message);
    };
    ChatSocketService.prototype.getListener = function (type) {
        var _this = this;
        console.log("** Get Listener: " + type);
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on(type, function (data) {
                observer.next(data);
            });
            return function () {
                // this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatSocketService.prototype.autoLogin = function () {
        if (!this.nickname)
            this.router.navigate(['']); // get me a nickname
        this.login(this.nickname, this.truename, this.avatar);
    };
    ChatSocketService.prototype.login = function (nickname, truename, avatar) {
        if (!nickname)
            this.router.navigate(['']); // get me a nickname
        this.nickname = nickname;
        this.truename = truename;
        this.avatar = avatar;
        this.router.navigate(['connect']);
        this.sendMessage('login', [nickname, truename, avatar]);
    };
    ChatSocketService.prototype.message = function (message) {
        this.sendMessage('message', [message, this.color]);
    };
    ChatSocketService.prototype.ready = function () {
        this.sendMessage('ready', 'ok');
    };
    ChatSocketService = __decorate([
        core_1.Injectable()
    ], ChatSocketService);
    return ChatSocketService;
}());
exports.ChatSocketService = ChatSocketService;
