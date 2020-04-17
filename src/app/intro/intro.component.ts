import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  username: string;

  constructor() {}

  ngOnInit(): void {}

  handleNameClick(): void {
    console.log('Submitting name:', this.username);
  }
}
