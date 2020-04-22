import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { timerOptions } from '../../constants';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleStartGameClick() {
    this.hasStarted = true;
  }

  handleCountClick() {
    this.count++;
  }

  stopGame() {
    this.hasStarted = false;
    const { count, timer } = this;
    this.saveResult.emit({ count, timer });
    // TODO: save count and timer in between using services
    this.router.navigateByUrl('/result');
  }
}
