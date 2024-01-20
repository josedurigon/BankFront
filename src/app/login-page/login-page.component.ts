import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgbModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password:['', Validators.required]
      })
  }

  onSubmit(){
    if(this.loginForm.valid){
      //logic
      console.log("Ok")
    }
  }

}
