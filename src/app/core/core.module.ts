import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {NavbarComponent} from './components/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "./services/account.service";
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    RegisterComponent
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
    NavbarComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
