import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import * as anime from 'animejs';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
