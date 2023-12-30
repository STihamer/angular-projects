import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  siteSlogan: string = 'Do shop not eat when depressed!!!';
  source: string = '../../assets/shopping.jpg';

  getSlogan() {
    return 'this is a new slogan for this web app';
  }
}
