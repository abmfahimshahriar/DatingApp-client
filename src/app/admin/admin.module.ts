import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminPanelComponent,
  ]
})
export class AdminModule { }
