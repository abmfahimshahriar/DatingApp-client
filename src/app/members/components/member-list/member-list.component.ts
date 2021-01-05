import { Component, OnInit } from '@angular/core';
import {Member} from "../../../models/Member";
import {MembersService} from "../../services/members.service";
import {Observable} from "rxjs";
import {Pagination} from "../../../models/pagination";
import {UserParams} from "../../../models/UserParams";
import {User} from "../../../models/user";
import {AccountService} from "../../../core/services/account.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;

  constructor(
    private memberService: MembersService,
    private accountService: AccountService,
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.userParams = new UserParams(user);
    })
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    });
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.loadMembers();
  }

}
