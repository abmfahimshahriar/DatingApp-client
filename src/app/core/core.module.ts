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



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
    AccountService,
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    ListsComponent,
    MessagesComponent,
  ]
})
export class CoreModule { }
