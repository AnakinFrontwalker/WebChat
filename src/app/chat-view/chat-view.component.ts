import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatSocketService } from '../chat-socket.service';

@Component({
  moduleId: module.id,
  selector: 'chat-view',
  templateUrl: 'chat-view.component.html',
  styleUrls: ['chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {
    messages = [];
    socketListener;
    constructor(private chatService: ChatSocketService) { }

  ngOnInit() {

      this.socketListener = this.chatService.getListener('message').subscribe((message: any) => {
          message.unshift(new Date);
          this.messages.push(message);
      });
  }

  ngOnDestroy() {
      this.socketListener.unsubscribe();
      console.log("Unsubscribe: Chat-View");
  }

}
