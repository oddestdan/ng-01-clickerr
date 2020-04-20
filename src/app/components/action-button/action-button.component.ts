import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements OnInit {
  @Input() value: string;
  @Output() click: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  clickHandler(event): void {
    this.click.emit(event);
  }
}
