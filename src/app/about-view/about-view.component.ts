import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss'],
})
export class AboutViewComponent implements OnInit {
  title: string;

  constructor(
    private router: Router,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.title = this.gameDataService.title;
  }

  handleEnterGameClick(_): void {
    this.router.navigateByUrl('/intro');
  }
}
