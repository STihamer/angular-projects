import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  displayMessage: boolean = false;
  closeMessage() {
    this.displayMessage = true;
  }
}
