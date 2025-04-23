import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameDevComponent } from './game-dev/game-dev.component';
import { ITComponent } from './it/it.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'Software-Dev',
    component: SoftwareDevComponent
  },
  {
    path: 'Cybersecurity',
    component: CybersecurityComponent
  },
  {
    path: 'Game-Dev',
    component: GameDevComponent
  },
  {
    path: 'IT&Systems',
    component: ITComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
