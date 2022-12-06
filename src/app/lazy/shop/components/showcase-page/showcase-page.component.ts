import { Component } from '@angular/core';

import { Slide } from 'src/app/widgets/carousel/types';

@Component({
  selector: 'app-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss'],
})
export class ShowcasePageComponent {
  public slides: Slide[] = [
    {
      alt: "For Your Current Mood",
      src:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      alt: "Cherry",
      src:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      alt: "In The Wilderness",
      src:
        "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
    },
    {
      alt: "Focus On The Writing",
      src:
        "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    }
  ];
}
