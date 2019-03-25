import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  passwordHide = true;
  signUpForm: FormGroup;

  userName: string;
  email: string;
  phone: string;
  password: string;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

}
