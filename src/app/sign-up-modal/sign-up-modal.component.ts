import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {
  hide = true;
  signup_form = {
    email: null,
    password: null,
    confirm_password: null
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.signup_form);
  }

}
