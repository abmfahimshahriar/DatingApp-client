import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {User} from "../../../models/user";

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.scss']
})
export class RolesModalComponent implements OnInit {
  @Input() updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];

  constructor(
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  updateRoles() {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }

}
