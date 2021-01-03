import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {ToastrService} from "ngx-toastr";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

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
      Password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      ConfirmPassword: ['',[Validators.required,this.matchValues('Password')]],
    });
  }

  matchValues(matchTo: string) {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true};
    };
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
