import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-displayed-text',
  templateUrl: './displayed-text.component.html',
  styleUrls: ['./displayed-text.component.css']
})
export class DisplayedTextComponent implements OnInit {

  constructor() { }

  textToDisplay: string[] = ["Hello and welcome to my website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus faucibus, tincidunt quam in, bibendum risus. In et placerat dui. Mauris ornare quam vel molestie vulputate. Duis suscipit pharetra erat, eget maximus urna mollis ac. Pellentesque finibus turpis a ultricies tristique. Aliquam lobortis, leo eu lobortis tempor, massa nisl sagittis quam, ac vestibulum nisl ex id quam. Etiam sed rhoncus mauris. In hac habitasse platea dictumst. Aenean libero metus, lobortis sed maximus non, euismod sit amet nisi. In hac habitasse platea dictumst. Integer consequat tellus et turpis suscipit tincidunt. Ut tristique metus ut vestibulum semper. Nunc imperdiet suscipit ex."];

  tl = gsap.timeline({paused: true});

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.displayText();
  }

  displayText() {
    return this.tl.to('#text', {duration: 3, opacity: 1}).play();
  }

}
