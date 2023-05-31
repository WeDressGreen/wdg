import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-resell',
  templateUrl: './resell-page.component.html',
  styleUrls: ['./resell-page.component.css']
})
export class ResellPageComponent {

  constructor(
    private router: Router,

  ) {

  }



  goToListItem(): void {
    this.router.navigate(['front/resell/add']).then();
  }
}
