import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Message} from "../../../models/message";
import {MessageService} from "../../../shared/services/message.service";
import {NoPhotoUrl} from "../../../shared/utility/noImagePhoto";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() username;
  @Input() messages: Message[];
  noImgUrl = NoPhotoUrl;
  messageContent: string;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    })
  }

}
