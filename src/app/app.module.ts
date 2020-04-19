import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './game-view/game-view.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { IntroViewComponent } from './intro-view/intro-view.component';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './timer/timer.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    GameViewComponent,
    ResultViewComponent,
    IntroViewComponent,
    AboutViewComponent,
    ActionButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
