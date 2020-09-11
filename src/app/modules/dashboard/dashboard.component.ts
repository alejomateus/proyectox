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
    });
  }

  ngOnInit(): void {}

  initVista(): void {
    const bounding = document
      .getElementById('app-goals')
      .getBoundingClientRect();
    this.scrollMetoh(bounding, 'tituloPrueba', 'eartBeat');
    const bounding3 = document
      .getElementById('app-benefits')
      .getBoundingClientRect();
    this.scrollMetoh(bounding3, 'div.card-benefits', 'rubberBand', true);
    const bounding2 = document
      .getElementById('app-abroad-rates')
      .getBoundingClientRect();
    this.scrollMetoh(bounding2, 'card-price2', 'fadeInUpBig');
    this.scrollMetoh(bounding2, 'div.card-price1', 'fadeInDownBig', true);
    const bounding4 = document
      .getElementById('app-colombia-rates')
      .getBoundingClientRect();
    this.scrollMetoh(bounding4, 'card-col-price1', 'fadeInUpBig');
    this.scrollMetoh(bounding4, 'div.card-col-price2', 'fadeInDownBig', true);
    const bounding5 = document
      .getElementById('formulario')
      .getBoundingClientRect();
    this.scrollMetoh(bounding5, 'form-contac', 'fadeInTopRight');
    this.scrollMetoh(bounding5, 'aviso-form', 'fadeInBottomLeft');
    const bounding6 = document
      .getElementById('app-challenges-met')
      .getBoundingClientRect();
    this.scrollMetoh(bounding6, 'img-cambio', 'rubberBand');
    const bounding7 = document
      .getElementById('app-challenges')
      .getBoundingClientRect();
    this.scrollMetoh(bounding7, 'div.card-image', 'zoomInDown', true);
  }
  scrollMetoh(bounding, idElement, addClass, multiple = false): void {
    if (
      bounding.top <
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      if (!multiple) {
        const prueba = document.getElementById(idElement);
        prueba.classList.add(addClass);
      } else {
        const prueba = document.querySelectorAll(idElement);
        prueba.forEach((item) => {
          item.classList.add(addClass);
        });
      }
    }
  }
}
