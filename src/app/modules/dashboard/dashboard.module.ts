import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboarRoutingModule } from './dashboard-routing.module';
import { GoalsComponent } from './components/goals/goals.component';
import { MonthPromoComponent } from './components/month-promo/month-promo.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ColombiaRatesComponent } from './components/colombia-rates/colombia-rates.component';
import { AbroadRatesComponent } from './components/abroad-rates/abroad-rates.component';
import { ChallengesMetComponent } from './components/challenges-met/challenges-met.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [DashboardComponent, GoalsComponent, MonthPromoComponent, BenefitsComponent, ChallengesComponent, ColombiaRatesComponent, AbroadRatesComponent, ChallengesMetComponent, GalleryComponent, ContactComponent],
  imports: [
    CommonModule,
    DashboarRoutingModule
  ]
})
export class DashboardModule { }
