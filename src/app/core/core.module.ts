import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {NavbarComponent} from './components/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "./services/account.service";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    AccountService,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
