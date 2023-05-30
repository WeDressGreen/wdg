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

  tabs = [
    {
      label: 'WISHLIST',
      content: '❤️<br>No products added yet.<br>Create an account or login to be able to save wishlist'
    },
    {label: 'BASKET', content: 'YOUR BASKET IS EMPTY'}
  ];

  tabs1 = [
    {
      label: 'ACCOUNT',
      title: 'LOG IN',
      subtitle: 'To access your account',
      email: '',
      password: '',
      buttonText: 'SIGN IN',
      action: () => this.login()
    },
    {
      label: 'SIGN UP',
      title: 'SIGN UP',
      subtitle: 'To create your account',
      email: '',
      password: '',
      confirmPassword: '',
      buttonText: 'CREATE AN ACCOUNT',
      action: () => this.register()
    }];

  links = [
    {label: 'Clothing', routerLink: 'front/products'},
    {label: 'Accessories', routerLink: ''},
    {label: 'Coming soon', routerLink: ''},
    {label: 'Sell', routerLink: ''},
    {label: 'Shop Second-hand', routerLink: ''}
  ];

  icons = [
    {label: 'account_circle'},
    {label: 'favorite'},
    {label: 'shopping_basket'},
  ];

  menuItems = [
    { label: 'WeDressGreen', routerLink: '/' },
    { label: 'Re-sell', routerLink: 'front/resell' },
    { label: 'Brands', routerLink: '' }
  ];


  register() {
  }

  login() {
    if (this.email == "admin" && this.password == "admin") {
      this.snackBar.open('Login Successful', '', {duration: 1000})
    } else {
      this.snackBar.open('Login error', '', {duration: 1000})
    }
  }


  logout() {

  }

  toggleTab(index: number) {
    if (this.tabGroup)
      this.tabGroup.selectedIndex = index;
  }





}




