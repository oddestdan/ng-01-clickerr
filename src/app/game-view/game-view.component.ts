import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { timerOptions } from '../../constants';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit {
  hasStarted = false;
  timerOptions: Array<number> = timerOptions;
  @Input() timer: number;
  @Input() count: number;

  @Output() saveResult: EventEmitter<Object> = new EventEmitter();

  ngOnInit(): void {}

  handleStartGameClick() {
    this.hasStarted = true;
  }

  handleCountClick() {
    this.count++;
  }

  stopGame() {
    const { count, timer } = this;
    this.saveResult.emit({ count, timer });
    this.hasStarted = false;
  }
}
