import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {NavbarComponent} from './components/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "./services/account.service";
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import {RouterModule} from "@angular/router";
import {ToastrModule} from "ngx-toastr";
import { TestErrorsComponent } from './components/test-errors/test-errors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BusyService} from "./services/busy.service";
import {SharedModule} from "../shared/shared.module";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {MessageService} from "../shared/services/message.service";
import {TimeagoModule} from "ngx-timeago";
import {PresenceService} from "./services/presence.service";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    ConfirmDialogComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        RouterModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        NgxSpinnerModule,
        SharedModule,
        PaginationModule.forRoot(),
        ButtonsModule.forRoot(),
        TimeagoModule.forRoot(),
    ],
  providers: [
    AccountService,
    BusyService,
    MessageService,
    PresenceService,
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    NgxSpinnerModule,
  ]
})
export class CoreModule { }
