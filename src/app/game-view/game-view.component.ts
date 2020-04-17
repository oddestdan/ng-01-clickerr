import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit {
  timer: number = 3;
  @Input() count: number;

  @Output() saveCount: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {}

  click() {
    this.count++;
  }

  stopGame() {
    this.saveCount.emit(this.count);
  }
}
