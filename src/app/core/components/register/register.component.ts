import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {ToastrService} from "ngx-toastr";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registrationForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }

  initForm() {
    this.registrationForm = this.fb.group({
      Gender: ['male'],
      Username: ['',Validators.required],
      KnownAs: ['',Validators.required],
      DateOfBirth: ['',Validators.required],
      City: ['',Validators.required],
      Country: ['',Validators.required],
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
      this.router.navigateByUrl('/members');
    }, error => {
      this.validationErrors = error;
    });
  }

  cancel() {
    this.cancelRegister.emit( );
  }

}
