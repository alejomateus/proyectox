import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
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

  constructor(mediaObserver: MediaObserver) {
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
  statusMenu() {
    this.visibleMenu =
      this.visibleMenu === 'fadeInDown' ? 'fadeOutUp' : 'fadeInDown';
  }

  hidesMenu() {
    console.log('this.visibleMenu', this.visibleMenu);

    if (this.visibleMenu) {
      this.visibleMenu = 'fadeOutUp';
    }
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
