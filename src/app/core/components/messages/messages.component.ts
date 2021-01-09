import { Component, OnInit } from '@angular/core';
import {Message} from "../../../models/message";
import {Pagination} from "../../../models/pagination";
import {MessageService} from "../../../shared/services/message.service";
import {NoPhotoUrl} from "../../../shared/utility/noImagePhoto";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  pagination: Pagination;
  container = 'Unread';
  pageNumber = 1;
  pageSize = 5;

  noPhotoUrl = NoPhotoUrl;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(response => {
      this.messages = response.result;
      this.pagination = response.pagination;
    });
  }

  pageChanged(event: any) {
    this.pagination = event.page;
    this.loadMessages();
  }
}
