import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../../models/Member";
import {MembersService} from "../../services/members.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;
  noPhotoUrl = "https://res.cloudinary.com/fshahriar008/image/upload/v1609701702/user_bccush.png";

  constructor(
    private memberService: MembersService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    console.log('like clicked');
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked' + member.knownAs);
    })
  }
}
