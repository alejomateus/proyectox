import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  opened = true;
  visibleMenu: string;
  vista: boolean;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  watcher: Subscription;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;

  constructor(mediaObserver: MediaObserver, private router: Router) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }
  statusMenu(): void {
    this.visibleMenu =
      this.visibleMenu === 'fadeInDown' ? 'fadeOutUp' : 'fadeInDown';
  }

  hidesMenu(): void {
    console.log('this.visibleMenu', this.visibleMenu);

    if (this.visibleMenu) {
      this.visibleMenu = 'fadeOutUp';
    }
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  scrollToElement(element, itemMenu?): void {
    let top = document.getElementById(element);
    const items = document.querySelectorAll('.item-menu');
    items.forEach((item) => {
      item.classList.remove('active');
    });
    itemMenu.classList.add('active');
    if (top !== null) {
      top.scrollIntoView({ behavior: 'smooth' });
      top = null;
    }
  }
}
