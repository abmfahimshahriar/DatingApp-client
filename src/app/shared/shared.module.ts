import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DateInputComponent } from './components/date-input/date-input.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {MemberCardComponent} from "./components/member-card/member-card.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TextInputComponent,
    DateInputComponent,
    MemberCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule,
  ],
  exports: [
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DateInputComponent,
    BsDatepickerModule,
    MemberCardComponent,
  ]
})
export class SharedModule { }
