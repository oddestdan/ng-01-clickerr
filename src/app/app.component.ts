import { Component } from '@angular/core';
import { views } from '../constants';
import { timerOptions } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clickerr';
  username: string;
  defaultName = 'Alyx Vance';

  count = 0;
  timer: number = timerOptions[1];

  currentView: string;

  catchEnterGameEvent(): void {
    this.currentView = views.INTRO;
  }

  catchInputUsernameEvent(username: string): void {
    this.username = username || this.defaultName;
    // if (username) {
    // this.username = username;
    // } else {
    // this.username = this.defaultName;
    // TODO: create temporary message:
    // Alrighty then...
    // In that case, I'll call you Alyx Vance!
    // -> timeout for 2-3 seconds
    // }

    this.currentView = views.GAME;
  }

  catchSaveResultEvent({ count, timer }): void {
    this.count = count;
    this.timer = timer;

    this.currentView = views.RESULT;
  }

  catchTryAgainEvent(): void {
    this.count = 0; // reset

    this.currentView = views.GAME;
  }
}
