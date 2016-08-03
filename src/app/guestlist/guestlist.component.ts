import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatSocketService } from '../chat-socket.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'guestlist',
  templateUrl: 'guestlist.component.html',
  styleUrls: ['guestlist.component.css']
})
export class GuestlistComponent implements OnInit, OnDestroy {
    users: any = [];
    socketListener: Subscription[] = [];
    constructor(private chatService: ChatSocketService) {
        this.socketListener.push(this.chatService.getListener('list').subscribe(users => {
            this.users = users;
        }));

        this.socketListener.push(this.chatService.getListener('list add').subscribe(user => {
            this.users.push(user);
        }));

        this.socketListener.push(this.chatService.getListener('list rem').subscribe((nick:any) => {
            for (let i = 0; i < this.users.length; i++) {
                if (nick == this.users[i].nick)
                    this.users.splice(i, 1);
            }
            
        }));
    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        for (let lis of this.socketListener) {
            lis.unsubscribe();
        }
    }

}
