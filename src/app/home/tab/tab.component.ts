import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs: string[] = ['Home', 'About me', 'My "creations"', 'Contact'];

  @Input() welcomeAnimFinished;

  tl = gsap.timeline({paused: true});

  constructor() { }

  ngOnInit() {
    this.welcomeAnimFinished = false;
  }

  afterViewInit() {
  }

  tabEntryAnim() {
    this.tl.to('.tabs', {x: 0, stagger: 0.15});
    this.tl.play();
  }

}
