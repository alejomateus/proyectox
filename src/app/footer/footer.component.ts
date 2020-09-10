import { Component, OnInit } from '@angular/core';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faUps = faAngleUp;
  constructor() {}

  ngOnInit(): void {}

  scrollToElement($element?): void {
    let top = document.getElementById('promo');
    if (top !== null) {
      top.scrollIntoView({ behavior: 'smooth' });
      top = null;
    }
  }
}
