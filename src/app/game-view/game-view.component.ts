import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { timerOptions } from '../../constants';
import { Router } from '@angular/router';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit {
  hasStarted = false;
  timerOptions: Array<number> = timerOptions;
  timer = timerOptions[1];
  count = 0;

  constructor(
    private router: Router,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {}

  handleStartGameClick() {
    this.hasStarted = true;
  }

  handleCountClick() {
    this.count++;
  }

  stopGame() {
    this.hasStarted = false;
    this.gameDataService.count = this.count;
    this.gameDataService.timer = this.timer;

    this.router.navigateByUrl('/result');
  }
}
