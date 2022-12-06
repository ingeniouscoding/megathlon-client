import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, Input, OnInit } from '@angular/core';
import { map, startWith, Subject, switchMap, timer } from "rxjs";

import { scaleIn, scaleOut } from "../../animations/carousel.animations";
import { Slide } from '../../types';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition("void => *", [
        useAnimation(scaleIn, { params: { time: '1300ms' } }),
      ]),
      transition("* => void", [
        useAnimation(scaleOut, { params: { time: '1300ms' } }),
      ]),
    ])
  ],
})
export class ImageCarouselComponent implements OnInit {
  @Input() public slides!: Slide[];
  @Input() public duration = 3000;

  private reset$ = new Subject();
  private index$ = this.reset$
    .pipe(
      startWith(void 0),
      switchMap(() => timer(0, this.duration)),
      map(() => this.nextImage())
    );

  public vm$ = this.index$
    .pipe(
      map((v) => ({ index: v }))
    );

  private currentSlide = -1;

  ngOnInit(): void {
    this.preloadImages();
  }

  onNextSlide(): void {
    this.reset$.next(void 0);
  }

  onPreviousSlide(): void {
    this.previousImage();
    this.reset$.next(void 0);
  }

  private nextImage(): number {
    const length = this.slides.length;
    this.currentSlide = (this.currentSlide + length + 1) % length;
    return this.currentSlide;
  }

  private previousImage(): void {
    this.currentSlide -= 2;
  }

  private preloadImages(): void {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
