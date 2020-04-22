import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() timer: number;
  countdownTimer: any;

  @Output() stopGame: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.countdownTimer = this.countdown();
  }

  countdown(): any {
    return setInterval(() => {
      // TODO: for hard mode, change clicker-button styling every second
      if (this.timer > 1) {
        this.timer--;
      } else {
        this.stopTimer();
        this.stopGame.emit();
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.countdownTimer);
    this.countdownTimer = null;
  }
}
