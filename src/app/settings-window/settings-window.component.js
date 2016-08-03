"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core'); // animations
var SettingsWindowComponent = (function () {
    function SettingsWindowComponent(chatService) {
        this.chatService = chatService;
        this.openSettings = new core_1.EventEmitter();
        this.colors = ['000000', '993300', '333300', '003300', '003366', '000080', '333399', '333333', '800000', 'FF6600', '808000', '008000', '008080',
            '0000FF', '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00',
            'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99', 'FFFF99', 'CCFFCC', 'CCFFFF', '99CCFF', 'CC99FF', 'FFFFFF'];
    }
    SettingsWindowComponent.prototype.ngOnInit = function () {
    };
    SettingsWindowComponent.prototype.setColor = function (color) {
        this.chatService.color = '#' + color;
    };
    SettingsWindowComponent.prototype.closeWindow = function () {
        this.openSettings.emit(false);
    };
    __decorate([
        core_1.Output()
    ], SettingsWindowComponent.prototype, "openSettings", void 0);
    SettingsWindowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings-window',
            templateUrl: 'settings-window.component.html',
            styleUrls: ['settings-window.component.css'],
            animations: [
                core_2.trigger('myAnimation', [
                    core_2.state('visible', core_2.style({ transform: 'scale(1)' })),
                    core_2.transition('void => *', [
                        core_2.style({ transform: 'scale(0)' }),
                        core_2.animate(100)
                    ]),
                    core_2.transition('* => void', [
                        core_2.animate(100, core_2.style({ transform: 'scale(0)' }))
                    ])
                ])
            ]
        })
    ], SettingsWindowComponent);
    return SettingsWindowComponent;
}());
exports.SettingsWindowComponent = SettingsWindowComponent;
