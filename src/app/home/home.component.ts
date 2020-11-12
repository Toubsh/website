import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabs: String[] = ["Home", "About me", "My 'creations'", "Contact"];

  constructor() { }

  // This is a comment for the Git tutorial

  ngOnInit() {
  }

  ngAfterViewInit() {
    let tl = gsap.timeline();
    tl.to("#welcome-text", {duration: 1, opacity: 1});
    tl.to("#welcome-text", {duration: 2, opacity: 0});
  }

}
