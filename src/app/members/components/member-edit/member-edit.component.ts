import {Component, HostListener, OnInit} from '@angular/core';
import {Member} from "../../../models/Member";
import {User} from "../../../models/user";
import {AccountService} from "../../../core/services/account.service";
import {MembersService} from "../../services/members.service";
import {take} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  user: User;
  memberEditForm: FormGroup;
  @HostListener('window: beforeunload',['$event']) unloadNotification($event: any) {
    if (this.memberEditForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    this.initForm();
  }

  ngOnInit(): void {
    this.loadMember();
  }

  initForm() {
    this.memberEditForm = this.fb.group({
      Introduction: [this.member?.introduction,[Validators.required]],
      LookingFor: [this.member?.lookingFor,[Validators.required]],
      Interests: [this.member?.interests,[Validators.required]],
      City: [this.member?.city,[Validators.required]],
      Country: [this.member?.country,[Validators.required]],
    })
  }

  loadMember() {
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
      this.initForm();
    })
  }

  updateMember() {
    this.memberService.updateMember(this.memberEditForm.value).subscribe(() => {
      this.toastr.success("Profile updated successfully");
      this.loadMember();
    })

  }

}
