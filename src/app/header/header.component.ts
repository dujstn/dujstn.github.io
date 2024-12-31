import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public screenWidth!: number;
  public drawerIsOpen: boolean = false;

  title: string = 'Justin Du';

  nav_links = [
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'CV', link: '/cv' },
  ];

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  changeNavDrawer() {
    this.drawerIsOpen = !this.drawerIsOpen;
  }

  updateScreenWidth(width: number) {
    this.screenWidth = width;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.updateScreenWidth(width);
  }

  isMobileWidth() {
    return this.screenWidth <= 650;
  }

  isDrawerOpen() {
    return this.drawerIsOpen;
  }
}
