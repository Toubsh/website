import { Component, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

import { gsap } from 'gsap';
import { DisplayedTextComponent } from './displayed-text/displayed-text.component';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() runningWelcomeAnim: boolean = false;

  tl = gsap.timeline({paused: true});

  constructor(private tab: TabComponent, private displayedText: DisplayedTextComponent) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Startup welcome animation when first visiting site
    this.welcomeAnimLogic();
    this.tl.play();
  }

  setHomeAnimToFalse() {
    this.runningWelcomeAnim = true;
  }

  welcomeAnimLogic() {
    // "Welcome" moving-row animation
    return this.tl.to('#welcome-text', {duration: 1, opacity: 1})
    .to('#welcome-text', {duration: 1.5, opacity: -0.5})
    .to('.anim-div-1', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(0.6, 0.7))
    .to('.anim-div-2', {duration: 1.1, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(0.8, 0.9))
    .to('.anim-div-3', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1, 1.1))
    .to('.anim-div-4', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1, 1.1))
    .to('.anim-div-5', {duration: 0.7, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1.1, 1.2))
    .to('.anim-div-6', {duration: 1.1, x: gsap.utils.random(3000, 3500), backgroundColor: 'rgb(' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ',' + gsap.utils.random(80, 100) + ')'}, '-=' + gsap.utils.random(1.1, 1.2))
    .set('#home-anim-container', {width: 0, height: 0, visibility: 'hidden'})
    .then(() => { this.tab.tabEntryAnim(); })
    .then(() => { this.displayedText.displayText(); });
  }

}
