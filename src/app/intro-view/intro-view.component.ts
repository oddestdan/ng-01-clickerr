import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent implements OnInit {
  username: string;
  @Input() defaultName: string;

  @Output() saveUsername: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  handleNameClick(): void {
    this.saveUsername.emit(this.username);
  }
}
