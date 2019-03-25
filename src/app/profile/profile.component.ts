import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  changePasswordForm: FormGroup;

  // updateProfile
  userName: string;
  email: string;
  firstName: string;
  lastName: string;

  // changePassword
  passwordHide1 = true;
  passwordHide2 = true;
  oldPassword: string;
  newPassword: string;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateProfileForm = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email])],
      firstName: ['', Validators.nullValidator],
      lastName: ['', Validators.nullValidator]
    });

    this.changePasswordForm = this._formBuilder.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  updateProfile(profile: any) {
    console.log(profile.unserName);
    this.userName = profile.unserName;
    this.email = profile.email;
    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
  }

  changePassword

}
