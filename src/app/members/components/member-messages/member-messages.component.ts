import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../models/message";
import {MessageService} from "../../../shared/services/message.service";
import {NoPhotoUrl} from "../../../shared/utility/noImagePhoto";

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss']
})
export class MemberMessagesComponent implements OnInit {
  @Input() username;
  @Input() messages: Message[];
  noImgUrl = NoPhotoUrl;

  constructor(
  ) { }

  ngOnInit(): void {
  }



}
