import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import {MembersService} from "./services/members.service";



@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent, MemberCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MemberListComponent,
    MemberDetailsComponent,
  ],
  providers: [
    MembersService,
  ]
})
export class MembersModule { }
