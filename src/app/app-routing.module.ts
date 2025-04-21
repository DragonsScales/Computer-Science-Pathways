import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';

const routes: Routes = [
  {
    path: 'Software-Dev',
    component: SoftwareDevComponent
  },
  {
    path: 'Cybersecurity',
    component: CybersecurityComponent
  },
  {
    path: 'Data-Analytics',
    component: DataAnalyticsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
