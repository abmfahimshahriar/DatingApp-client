import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberCardComponent } from '../shared/components/member-card/member-card.component';
import {MembersService} from "./services/members.service";
import {RouterModule} from "@angular/router";
import {TabsModule} from "ngx-bootstrap/tabs";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';
import {FileUploadModule} from "ng2-file-upload";
import {SharedModule} from "../shared/shared.module";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from 'ngx-timeago';
import { MemberMessagesComponent } from './components/member-messages/member-messages.component';
import {MessageService} from "../shared/services/message.service";

@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent, MemberEditComponent, PhotoEditorComponent, MemberMessagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    ReactiveFormsModule,
    CoreModule,
    FileUploadModule,
    SharedModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TimeagoModule.forRoot(),
  ],
  exports: [
    MemberListComponent,
    MemberDetailsComponent,
    TabsModule,
    NgxGalleryModule,
    MemberEditComponent,
    FileUploadModule,
    PaginationModule,
    ButtonsModule,
    TimeagoModule,
  ],
  providers: [
    MembersService,
    MessageService,
  ]
})
export class MembersModule { }
