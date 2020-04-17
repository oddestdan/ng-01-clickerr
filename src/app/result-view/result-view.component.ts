import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss'],
})
export class ResultViewComponent implements OnInit {
  @Input() count: number;
  @Input() username: string;

  ngOnInit(): void {}
}
