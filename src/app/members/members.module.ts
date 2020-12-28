import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';



@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MemberListComponent,
    MemberDetailsComponent,
  ]
})
export class MembersModule { }
