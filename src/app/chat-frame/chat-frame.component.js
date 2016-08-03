"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var guestlist_component_1 = require('../guestlist/guestlist.component');
var chat_view_component_1 = require('../chat-view/chat-view.component');
var chat_input_component_1 = require('../chat-input/chat-input.component');
var MDLUpdate_1 = require('../MDLUpdate');
var ScrollGlue_1 = require('../ScrollGlue');
var ChatFrameComponent = (function () {
    function ChatFrameComponent(router, chat) {
        this.router = router;
        this.chat = chat;
    }
    ChatFrameComponent.prototype.ngOnInit = function () {
    };
    ChatFrameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-chat-frame',
            templateUrl: 'chat-frame.component.html',
            styleUrls: ['chat-frame.component.css'],
            directives: [guestlist_component_1.GuestlistComponent, chat_view_component_1.ChatViewComponent, chat_input_component_1.ChatInputComponent, MDLUpdate_1.MDL, ScrollGlue_1.ScrollGlue]
        })
    ], ChatFrameComponent);
    return ChatFrameComponent;
}());
exports.ChatFrameComponent = ChatFrameComponent;
