import { Component, Output, EventEmitter  } from '@angular/core';
import { ChatSocketService } from '../chat-socket.service';

@Component({
  moduleId: module.id,
  selector: 'chatinput',
  templateUrl: 'chat-input.component.html',
  styleUrls: ['chat-input.component.css']
})
export class ChatInputComponent {
    @Output() openSettings = new EventEmitter < boolean > ();

    message = '';
    constructor(private csrv: ChatSocketService) {}
    sendMessage() {
            this.message = this.message.trim();
            if (this.message == '')
                return;

            console.log("Send: "+this.message);
            this.csrv.message(this.message);
            this.message = '';
    }

    settings() {
        this.openSettings.emit(true);
    }

}
