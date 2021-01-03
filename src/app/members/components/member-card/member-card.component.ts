import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../../models/Member";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;
  noPhotoUrl = "https://res.cloudinary.com/fshahriar008/image/upload/v1609701702/user_bccush.png";
  constructor() { }

  ngOnInit(): void {
  }

}
