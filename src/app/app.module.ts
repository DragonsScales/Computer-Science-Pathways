import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { GameDevComponent } from './game-dev/game-dev.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { ITComponent } from './it/it.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SoftwareDevComponent,
    CybersecurityComponent,
    GameDevComponent,
    DataAnalyticsComponent,
    ITComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
