import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PhotoManagementComponent } from './components/photo-management/photo-management.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserManagementComponent,
    PhotoManagementComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    SharedModule,
  ],
  exports: [
    AdminPanelComponent,
    PhotoManagementComponent,
    TabsModule,
  ]
})
export class AdminModule { }
