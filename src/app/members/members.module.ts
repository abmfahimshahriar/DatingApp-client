import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import {MembersService} from "./services/members.service";
import {RouterModule} from "@angular/router";
import {TabsModule} from "ngx-bootstrap/tabs";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent, MemberCardComponent, MemberEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    ReactiveFormsModule,
  ],
  exports: [
    MemberListComponent,
    MemberDetailsComponent,
    TabsModule,
    NgxGalleryModule,
    MemberEditComponent,
  ],
  providers: [
    MembersService,
  ]
})
export class MembersModule { }
