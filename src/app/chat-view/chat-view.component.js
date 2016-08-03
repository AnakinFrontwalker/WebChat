"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChatViewComponent = (function () {
    function ChatViewComponent(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketListener = this.chatService.getListener('message').subscribe(function (message) {
            console.log(message);
            message.unshift(new Date);
            _this.messages.push(message);
        });
    };
    ChatViewComponent.prototype.ngOnDestroy = function () {
        this.socketListener.unsubscribe();
    };
    ChatViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-view',
            templateUrl: 'chat-view.component.html',
            styleUrls: ['chat-view.component.css']
        })
    ], ChatViewComponent);
    return ChatViewComponent;
}());
exports.ChatViewComponent = ChatViewComponent;
