import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountLinks = [
    { label: 'My account', routerLink: 'front/account/profile' },
    { label: 'My orders', routerLink: 'front/account/settings' },
    { label: 'Wishlist', routerLink: 'front/account/notifications' }
  ];

}
