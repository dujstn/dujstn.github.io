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
      description: '2023 - 2028. HBSc. Computer Science, ASIP Stream.',
      src: '/assets/cv/uoft.png',
      web_link: 'https://www.utoronto.ca/',
    },
  ];

  experience_entries = [
    {
      title: 'Data Scientist',
      description: 'Machine learning and generative AI development for internal software supporting 75,000+ employees in Canada and the United States.',
      src: '/assets/cv/rbc.png',
      web_link: 'https://rbcroyalbank.com'
    },
    {
      title: 'Machine Learning Developer',
      description: 'Machine learning development in Python. Cost optimization of models and distillation of LLMs to achieve deterministic behaviour.',
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
        '2x alumna among the top 0.1% of projects presented annually in Canada.',
      src: '/assets/cv/ysc.png',
      web_link: 'https://youthscience.ca/',
    },
  ];
}
