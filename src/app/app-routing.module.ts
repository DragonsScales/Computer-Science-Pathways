import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';

const routes: Routes = [
  {
    path: 'Software-Dev',
    component: SoftwareDevComponent
  },
  {
    path: 'Cybersecurity',
    component: CybersecurityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
