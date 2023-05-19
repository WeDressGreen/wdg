import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup | undefined;
  showFiller = false;
  email: string | undefined;
  password: string | undefined;
  remail: string | undefined;
  rpassword: string | undefined;
  rcpassword: string | undefined;
  isLoggedIn: any;
  username: any;
  drawer: any;

  constructor(public dialog: MatDialog, private snackBar:MatSnackBar) {}
  register() {

  }
  login() {
    if(this.email=="admin" && this.password=="admin"){
      this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }


  logout() {

  }





  toggleTab(index: number) {
    if(this.tabGroup)
      this.tabGroup.selectedIndex = index;
  }

}
