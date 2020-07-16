import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { gsap, random } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabs: string[] = ['Home', 'About me', 'My "creations"', 'Contact'];

  showWelcomeAnim: boolean = true;

  @Output() event = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.showWelcomeAnim = true;
  }

  ngAfterViewInit() {
    // Startup welcome animation when first visiting site
    const tl = gsap.timeline();
    tl.to('#welcome-text', {duration: 1, opacity: 1})
      .to('#welcome-text', {duration: 0.8, opacity: -1.9})
      .to('.anim-div-1', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(0.6, 0.7))
      .to('.anim-div-2', {duration: 1.1, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(0.8, 0.9))
      .to('.anim-div-3', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1, 1.1))
      .to('.anim-div-4', {duration: 1.1, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1, 1.1))
      .to('.anim-div-5', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1.1, 1.2))
      .to('.anim-div-6', {duration: 1.1, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1.1, 1.2))
      .to('#home-anim-container', {width: 0, height: 0});
  }

}
