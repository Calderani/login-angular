import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signUpModal = () => {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: '400px'
    });
  }

}
