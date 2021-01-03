import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DateInputComponent } from './components/date-input/date-input.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";



@NgModule({
  declarations: [TextInputComponent, DateInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DateInputComponent,
    BsDatepickerModule,
  ]
})
export class SharedModule { }
