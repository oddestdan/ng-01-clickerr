import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss'],
})
export class AboutViewComponent implements OnInit {
  @Input() title: string;
  @Output() enterGame: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {}

  handleEnterGameClick(_): void {
    this.enterGame.emit();
  }
}
