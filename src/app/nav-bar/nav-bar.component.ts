import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  selectedNav = 'home';
  activeNavID = '';
  textColor = 'white';
  navItems = [
    { label: 'Home', routerLink: '/', id: 'home' },
    { label: 'Software Dev', routerLink: '/Software-Dev', id: 'software-Dev' },
    { label: 'Cybersecurity', routerLink: '/Cybersecurity', id: 'cybersecurity' },
    { label: 'Data & Analytics', routerLink: '/Data-Analytics', id: 'data-Analytics' },
    { label: 'IT & Systems', routerLink: '/IT&Systems', id: 'it-Systems' },
    { label: 'UX/UI', routerLink: '/UI', id: 'ux-ui' },
    { label: 'Game Dev', routerLink: '/Game-Dev', id: 'game-dev'}
  ]

  onClickNav(nav: string) {
    this.selectedNav = nav;
    console.log("Selected Nav: " + nav);
  }
}
