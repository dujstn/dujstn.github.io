import { Routes } from '@angular/router';

import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
	{path: 'cv', title: 'CV', component: CvComponent},
	{path: 'portfolio', title: 'Portfolio', component: PortfolioComponent}
];
