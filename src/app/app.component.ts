import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  footerVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.footerVisible =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
}
