import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.scrollDispatcher.scrolled().subscribe((x) => {
      this.initVista();
      this.initVista2();
    });
  }

  ngOnInit(): void {}

  initVista(): void {
    const bounding = document
      .getElementById('app-goals')
      .getBoundingClientRect();
    if (
      bounding.top <
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      const prueba = document.getElementById('tituloPrueba');
      prueba.classList.add('eartBeat');
    }
  }
  initVista2(): void {
    const bounding = document
      .getElementById('app-benefits')
      .getBoundingClientRect();
    if (
      bounding.top <
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      const prueba = document.querySelectorAll('div.card-benefits');
      console.log('prueba', prueba);
      prueba.forEach((item) => {
        item.classList.add('rubberBand');
      });
    }
  }
}
