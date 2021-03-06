import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './home/tab/tab.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
