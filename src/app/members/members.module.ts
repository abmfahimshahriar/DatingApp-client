import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import {MembersService} from "./services/members.service";
import {RouterModule} from "@angular/router";
import {TabsModule} from "ngx-bootstrap/tabs";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";



@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent, MemberCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
  exports: [
    MemberListComponent,
    MemberDetailsComponent,
    TabsModule,
    NgxGalleryModule,
  ],
  providers: [
    MembersService,
  ]
})
export class MembersModule { }
