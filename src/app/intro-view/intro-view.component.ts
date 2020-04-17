import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent implements OnInit {
  username: string;

  @Output() saveUsername: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  handleNameClick(): void {
    console.log('Submitting name:', this.username);
    this.saveUsername.emit(this.username);
  }
}
