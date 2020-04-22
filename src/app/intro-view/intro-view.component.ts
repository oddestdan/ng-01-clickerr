import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent implements OnInit {
  username: string;
  defaultName: string;

  constructor(
    private router: Router,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.defaultName = this.gameDataService.defaultName;
  }

  handleNameClick(_): void {
    this.gameDataService.username = this.username;

    this.router.navigateByUrl('/game');
  }
}
