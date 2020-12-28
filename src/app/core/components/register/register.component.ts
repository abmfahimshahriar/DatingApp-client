import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toastr: ToastrService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.registrationForm = this.fb.group({
      Username: ['',Validators.required],
      Password: ['',Validators.required],
    });
  }

  register() {
    this.accountService.register(this.registrationForm.value).subscribe(response =>{
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  cancel() {
    this.cancelRegister.emit( );
  }

}
