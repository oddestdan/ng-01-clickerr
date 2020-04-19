import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() inputModel: string;
  @Input() placeholder: string;

  @Output() inputModelChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}
}
