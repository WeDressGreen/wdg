import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountLinks = [
    { label: 'My account', routerLink: '/account/profile' },
    { label: 'My orders', routerLink: '/account/settings' },
    { label: 'Wishlist', routerLink: '/account/notifications' }
  ];

}
