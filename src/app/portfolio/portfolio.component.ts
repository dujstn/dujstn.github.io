import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Project } from './portfolio-entry/portfolio-entry.interface';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  @Input() project!: Project;
  title = 'Justin Du';
}
