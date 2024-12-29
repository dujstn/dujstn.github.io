import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cv',
  imports: [HeaderComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  res_src = '/assets/cv/resume.pdf';

  education_entries = [
    {
      title: 'University of Toronto',
      description: '2023 - 2027. HBSc. Computer Science, ASIP Stream.',
      src: '/assets/cv/uoft.png',
      web_link: 'https://www.utoronto.ca/',
    },
  ];

  experience_entries = [
    {
      title: 'Full Stack + ML Developer',
      description: 'Machine learning development in Python.',
      src: '/assets/cv/knockri.png',
      web_link: 'https://knockri.com/',
    },
    {
      title: 'Webmaster',
      description:
        'Website maintenence for the largest regional science fair in British Columbia.',
      src: '/assets/cv/gvrsf.png',
      web_link: 'https://gvrsf.ca',
    },
  ];

  award_entries = [
    {
      title: 'Canada-Wide Science Fair, Bronze Medalist',
      description:
        '2x alumna among the top 0.1% of projects presented annualy in Canada.',
      src: '/assets/cv/ysc.png',
      web_link: 'https://youthscience.ca/',
    },
  ];
}
