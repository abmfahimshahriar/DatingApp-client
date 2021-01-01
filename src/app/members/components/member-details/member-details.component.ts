import { Component, OnInit } from '@angular/core';
import {Member} from "../../../models/Member";
import {MembersService} from "../../services/members.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  member: Member;

  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => this.member = member);
  }

}
