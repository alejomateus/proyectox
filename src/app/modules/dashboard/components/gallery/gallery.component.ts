import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor(private gallery: Gallery) {}

  ngOnInit(): void {}

  showGallery(index: number): void {
    const prop = {
      images: [
        { path: 'assets/gallery/1.jpg' },
        { path: 'assets/gallery/2.jpg' },
        { path: 'assets/gallery/3.jpg' },
        { path: 'assets/gallery/4.jpg' },
        { path: 'assets/gallery/5.jpg' },
        { path: 'assets/gallery/6.jpg' },
        { path: 'assets/gallery/7.jpg' },
        { path: 'assets/gallery/8.jpg' },
      ],
      index,
    };
    this.gallery.load(prop);
  }
}
