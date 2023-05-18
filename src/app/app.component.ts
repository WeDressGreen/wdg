import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup | undefined;
  title = 'WeDressGreen';
  email: any;
  password: any;
  remail: any;
  rpassword: any;
  rcpassword: any;

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




