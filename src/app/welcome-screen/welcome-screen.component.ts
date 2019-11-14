import { Component, OnInit, AfterViewInit } from '@angular/core';

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
        duration: '4000',
      },
      height: {
        value: '200%',
        duration: '4000',
      },
      translateX: ['-200px', '-100px'],
      translateY: '-200px',
      rotate: {
        value: '360',
        duration: '100',
      },
      'background-color': {
        value: ['rgb(255,40,255)', 'rgb(60,100,180)'],
        duration: '6000',
      },
      autoplay: false
    });
  }

  onClick() {
    this.overlayAnim.play();
    console.log(this.clickedContinue);
  }

}
