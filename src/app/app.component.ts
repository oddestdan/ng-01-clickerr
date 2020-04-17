import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string;
  count: number = 0;

  catchInputUsernameEvent(username): void {
    if (username) {
      console.log('Caught username:', username);
      this.username = username;
    } else {
      // TODO: create temporary message:
      // Alrighty then...
      // In that case, I'll call you Alyx Vance!
      // -> timeout for 2-3 seconds
    }

    // TODO: initialize game-view
  }

  catchSaveCountEvent(count): void {
    console.log('Caught count:', count);
    this.count = count;
  }
}
