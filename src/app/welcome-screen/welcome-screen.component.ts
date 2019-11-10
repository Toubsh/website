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
  }

  onClick() {
    this.clickedContinue = true;
    console.log(this.clickedContinue);
    anime({
      targets: '#welcome-text',
      "border-radius": '50%',
      size: ['0', '100%']
    });
  }

}
