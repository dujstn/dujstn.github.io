import { Routes } from '@angular/router';

import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
	{path: '', title: 'Justin Du', component: LandingPageComponent},
	{path: 'cv', title: 'Curriculum Vitae', component: CvComponent},
	{path: 'portfolio', title: 'Portfolio', component: PortfolioComponent},	
];
