import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../models/register.module';
import {FormGroup, FormBuilder,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: RegisterModel = new RegisterModel();
registerform : FormGroup;
hide = true;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      'name': [this.user.name,[
        Validators.required
      ]],
      'email':[this.user.email,[
        Validators.required
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })
  

}
onRegisterSubmit(){
alert(this.user.name + '' + this.user.email + '' + this.user.password);
}
}