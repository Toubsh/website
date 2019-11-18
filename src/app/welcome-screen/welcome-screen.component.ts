import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

import anime from 'animejs';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  upDownWobble;
  overlayAnim;
  clickedContinue: boolean = false;
  showWelcome: boolean = true;

  @Output() event = new EventEmitter();

  ngOnInit() {
  }

  ngAfterViewInit() { 
    this.upDownWobble = anime({
      targets: '#welcome-text',
      translateY: ['35vh', '40vh'],
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });
    this.overlayAnim = anime({
      targets: '#expand-overlay',
      width: {
        value: '200%',
        duration: '2000',
      },
      height: {
        value: '200%',
        duration: '2000',
      },
      translateX: ['-200px', '-100px'],
      translateY: '-200px',
      rotate: {
        value: '720',
        duration: '100',
      },
      'background-color': {
        value: ['rgb(255,40,255)', 'rgb(60,100,180)'],
        duration: '1800',
      },
      autoplay: false
    });
  }

  prepareUnloading(showWelcome) {
    this.showWelcome = showWelcome;
    this.event.emit(this.showWelcome);
  }

  onClick() {
    this.overlayAnim.play();
    let _this = this;
    setTimeout(function() { _this.prepareUnloading(this.showWelcome) }, 2000);
  }

}
