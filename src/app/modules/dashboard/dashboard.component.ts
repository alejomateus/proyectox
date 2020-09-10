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
    if (
      bounding.top <
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      const prueba = document.getElementById('tituloPrueba');
      prueba.classList.add('eartBeat');
      console.log('Esta en pantalla anadir fadeIN');
    } else {
      console.log('NO SE VE no hace una verga');
    }
  }
}
