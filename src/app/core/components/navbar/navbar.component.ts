import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {User} from "../../../models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean;
  currentUser: Observable<User>

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
  ) {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['',Validators.required],
    })
  }
  ngOnInit(): void {
    this.currentUser = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(response => {
    },error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }


}
