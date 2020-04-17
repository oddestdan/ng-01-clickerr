import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() timer: number;
  countdownTimer: NodeJS.Timeout = null;

  @Output() stopGame: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.countdownTimer = this.countdown();
  }

  countdown(): NodeJS.Timeout {
    return setInterval(() => {
      console.log('Setting timer interval');
      // TODO: change clicker-button styling every second

      if (this.timer > 0) {
        this.timer--;
      } else {
        this.stopTimer();
        this.stopGame.emit();
        // TODO: initialize result-view
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.countdownTimer);
    this.countdownTimer = null;
  }
}
