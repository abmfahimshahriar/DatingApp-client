import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean;

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
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    },error => {
      console.log(error);
    })
  }

}
