import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss'],
})
export class AboutViewComponent implements OnInit {
  @Output() enterGame: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {}

  handleEnterGameClick(): void {
    this.enterGame.emit();
  }
}
