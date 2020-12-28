import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {User} from "../../../models/user";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
    private router: Router,
    private toastr: ToastrService,
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
      this.router.navigateByUrl('/members');
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
