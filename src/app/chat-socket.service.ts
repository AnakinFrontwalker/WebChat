import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';

@Injectable()
export class ChatSocketService  {
    private url = 'http://vsr.pl:3000';
    private socket;
    private nickname: string;
    private truename: string;
    private avatar: string;
    public color: string = '#FFFFFF';

    private sendMessage(type, message) {
        this.socket.emit(type, message);
    }

    getListener(type): Observable<{}> {
        console.log("** Get Listener: "+type);
        let observable = new Observable(observer => {            
            this.socket.on(type, (data) => {
                observer.next(data);
            });
            return () => {
               // this.socket.disconnect();
            };
        })
        return observable;
    }

    constructor(private router: Router) {
        console.log("** Chat-Socket Constructor (Should be 1)");
        this.socket = io(this.url);
        this.router.navigate(['']);

        this.socket.on('disconnect', () => {
            console.log("** Disconnect");
            if (this.nickname)
                this.router.navigate(['/connect']); 
            else
                this.router.navigate(['']);
        });

        this.socket.on('status', (status) => {
            console.log("** Status: "+status);
            if (status == 'ready')
                this.router.navigate(['/chat']);
        });

        this.socket.on('connect', () => {
            console.log("** Connect");
            if (this.nickname) {
                this.router.navigate(['/connect']);
                this.autoLogin();
            }
        });
    }

    private autoLogin() {
        if (!this.nickname)
            this.router.navigate(['']); // get me a nickname
        this.login(this.nickname, this.truename, this.avatar);
    }

    login(nickname, truename, avatar) {
        if (!nickname)
            this.router.navigate(['']); // get me a nickname
        this.nickname = nickname;
        this.truename = truename;
        this.avatar = avatar;
        this.router.navigate(['connect']);
        this.sendMessage('login', [nickname, truename, avatar]);
    }

    message(message) {
        this.sendMessage('message', [message, this.color]);
    }

    ready() {
        this.sendMessage('ready','ok');
    }
}