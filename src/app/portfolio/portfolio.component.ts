import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent, NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  title = 'Justin Du';

  portfolio_entries = {
    stack: {
      id: 'stack',
      title: 'Stack: Multimedia Segmenter',
      description:
        'A Mask R-CNN model capable of distinguishing between various elements of a slide deck. Trained without OCR capabilities, it was able to meet and even surpass state-of-the-art benchmarks on the SPaSe dataset.',
      media: 'assets/portfolio/stack/demo.mp4',
      links: {
        GitHub: 'https://github.com/dujstn/stack-model',
        'Explore more outputs':
          'https://github.com/dujstn/stack-model/tree/main/output',
      },
    },
    interrsect: {
      id: 'interrsect',
      title: 'Interrsect: Short-form notetaking summarization',
      description:
        "A BART model finetuned on arxiv-summarization, capable of summarizing long pieces of text into bullet points. Intended for use in improving notetaking quality in class by summarizing over multiple students' versions of the same lecture content.",
      media: 'assets/portfolio/interrsect/summary.png',
      links: {
        GitHub: 'https://github.com/dujstn/interrsect',
        Website: 'https://interrsect.web.app',
        'Hugging Face': 'https://huggingface.co/JustinDu/BARTxiv',
        Dataset: 'https://huggingface.co/datasets/ccdv/arxiv-summarization',
      },
    },
    drmario: {
      id: 'drmario',
      title: 'Dr. Mario - Assembly',
      description:
        'A rendition of the Dr. Mario video game, programmed in MIPS Assembly. Created as part of a project for CSC258 at the University of Toronto.',
      media: 'assets/portfolio/drmario/demo.mp4',
      links: {
        Course: 'https://artsci.calendar.utoronto.ca/course/csc258h1',
      },
    },
  };

  getPortfolioEntries() {
    return Object.values(this.portfolio_entries);
  }

  getEntryLinksByID(id: string) {
    type ValidKeys = keyof typeof this.portfolio_entries;
    if (id in this.portfolio_entries) {
      return Object.entries(this.portfolio_entries[id as ValidKeys].links);
    } else {
      throw new Error(`Invalid ID: ${id}`);
    }
  }

  getEntryImagesByID(id: string) {
    type ValidKeys = keyof typeof this.portfolio_entries;
    if (id in this.portfolio_entries) {
      return Object.entries(this.portfolio_entries[id as ValidKeys].media);
    } else {
      throw new Error(`Invalid ID: ${id}`);
    }
  }

  isVideoByID(id: string) {
    type ValidKeys = keyof typeof this.portfolio_entries;
    if (id in this.portfolio_entries) {
      return (
        this.portfolio_entries[id as ValidKeys].media.split('.').pop() === 'mp4'
      );
    } else {
      throw new Error(`Invalid ID: ${id}`);
    }
  }
}
