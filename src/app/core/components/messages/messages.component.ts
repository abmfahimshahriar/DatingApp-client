import { Component, OnInit } from '@angular/core';
import {Message} from "../../../models/message";
import {Pagination} from "../../../models/pagination";
import {MessageService} from "../../../shared/services/message.service";
import {NoPhotoUrl} from "../../../shared/utility/noImagePhoto";
import {ConfirmService} from "../../services/confirm.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  pagination: Pagination;
  container = 'Unread';
  pageNumber = 1;
  pageSize = 5;
  loading = false;

  noPhotoUrl = NoPhotoUrl;

  constructor(
    private messageService: MessageService,
    private confirmService: ConfirmService,
  ) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.loading = true;
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(response => {
      this.messages = response.result;
      this.pagination = response.pagination;
      this.loading = false;
    });
  }

  deleteMessage(id: number) {

    this.confirmService.confirm("Delete this message?","This can not be undone").subscribe(result => {
      if (result) {
        this.messageService.deleteMessage(id).subscribe(() => {
          this.messages.splice(this.messages.findIndex(m => m.id === id),1);
        });
      }
    })

  }

  pageChanged(event: any) {
    this.pagination = event.page;
    this.loadMessages();
  }
}
