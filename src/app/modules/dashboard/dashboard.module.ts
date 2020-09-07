import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboarRoutingModule } from './dashboard-routing.module';
import { GoalsComponent } from './components/goals/goals.component';
import { MonthPromoComponent } from './components/month-promo/month-promo.component';

@NgModule({
  declarations: [DashboardComponent, GoalsComponent, MonthPromoComponent],
  imports: [
    CommonModule,
    DashboarRoutingModule
  ]
})
export class DashboardModule { }
