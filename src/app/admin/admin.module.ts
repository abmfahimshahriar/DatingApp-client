import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { PhotoManagementComponent } from './components/photo-management/photo-management.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SharedModule} from "../shared/shared.module";
import {ModalModule} from "ngx-bootstrap/modal";
import { RolesModalComponent } from './components/roles-modal/roles-modal.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    SharedModule,
    ModalModule.forRoot(),
  ],
  exports: [
    AdminPanelComponent,
    PhotoManagementComponent,
    RolesModalComponent,
    TabsModule,
    ModalModule,
  ]
})
export class AdminModule { }
