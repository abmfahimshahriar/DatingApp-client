import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../../models/Member";
import {MembersService} from "../../../members/services/members.service";
import {ToastrService} from "ngx-toastr";
import {NoPhotoUrl} from "../../utility/noImagePhoto";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;
  noPhotoUrl = NoPhotoUrl;

  constructor(
    private memberService: MembersService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    console.log('like clicked');
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
  }
}