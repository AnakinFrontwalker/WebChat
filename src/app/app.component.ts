import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ConfigService } from './config.service';
import { Title }     from '@angular/platform-browser';
declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    public constructor(private titleService: Title) { }
    ngOnInit() {
        this.titleService.setTitle(ConfigService.AppTitle);
    }
}
