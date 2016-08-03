import { Component, AfterViewInit} from '@angular/core';
import { GuestlistComponent } from '../guestlist/guestlist.component';
import { ChatViewComponent } from '../chat-view/chat-view.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { SettingsWindowComponent } from '../settings-window/settings-window.component';
import { MDL } from '../MDLUpdate';  
import { ScrollGlue } from '../ScrollGlue' 
import { Router } from '@angular/router' 
import { ChatSocketService } from '../chat-socket.service' 

@Component({
  moduleId: module.id,
  selector: 'app-chat-frame',
  templateUrl: 'chat-frame.component.html',
  styleUrls: ['chat-frame.component.css'],
  directives: [GuestlistComponent, ChatViewComponent, ChatInputComponent, SettingsWindowComponent, MDL, ScrollGlue]
})
export class ChatFrameComponent implements AfterViewInit {
    settingsWindow = false;

    constructor(private router: Router, private chat: ChatSocketService) {
        
    }

    openSettings(value) {
        this.settingsWindow = value;
    }

    ngAfterViewInit() {
        this.chat.ready();
    }

}
