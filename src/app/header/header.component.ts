import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private gameDataService: GameDataService) {}

  ngOnInit(): void {
    this.title = this.gameDataService.title;
  }
}
