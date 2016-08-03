import { Component, OnInit, EventEmitter, Output }  from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core'; // animations
import { ChatSocketService } from '../chat-socket.service';

@Component({
  moduleId: module.id,
  selector: 'settings-window',
  templateUrl: 'settings-window.component.html',
  styleUrls: ['settings-window.component.css'],
  animations: [
      trigger('myAnimation', [
          state('visible', style({ transform: 'scale(1)' })),
          transition('void => *', [
              style({ transform: 'scale(0)' }),
              animate(100)
          ]),
          transition('* => void', [
              animate(100, style({ transform: 'scale(0)' }))
          ])
      ])
  ]
})
export class SettingsWindowComponent implements OnInit {
    @Output() openSettings = new EventEmitter<boolean>();
    colors: string[] =
    ['#000000', '#993300', '#333300', '#003300', '#003366', '#000080', '#333399', '#333333', '#800000', '#FF6600', '#808000', '#008000', '#008080',
    '#0000FF', '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966', '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0', '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFCC', '#CCFFFF', '#99CCFF', '#CC99FF', '#FFFFFF'];

    constructor(private chatService: ChatSocketService) { }

  ngOnInit() {
  }

  setColor(color) {
      this.chatService.color = color;
  }
  closeWindow() {
      this.openSettings.emit(false);
  }
}
