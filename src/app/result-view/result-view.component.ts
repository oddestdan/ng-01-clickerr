import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { criteria } from '../../constants';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss'],
})
export class ResultViewComponent implements OnInit {
  criteriaMessage: string;
  @Input() count: number;
  @Input() timer: number;
  @Input() username: string;

  @Output() tryAgain: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.formCriteriaMessage();
  }

  // According to Google:
  // "On average, most players would easily score 8 - 10 clicks per second."
  // Therefore, > 11 very good | > 8 good | > 6 decent | > 3 bad | less - very bad
  formCriteriaMessage(): void {
    const cps = Math.ceil(this.count / this.timer); // count per second
    switch (true) {
      case cps > 11:
        this.criteriaMessage = criteria.VERY_GOOD;
        break;
      case cps > 8:
        this.criteriaMessage = criteria.GOOD;
        break;
      case cps > 6:
        this.criteriaMessage = criteria.DECENT;
        break;
      case cps > 3:
        this.criteriaMessage = criteria.BAD;
        break;
      case cps >= 0:
        this.criteriaMessage = criteria.VERY_BAD;
        break;

      default:
        this.criteriaMessage = criteria.ERROR;
        break;
    }
  }

  handleTryAgainClick(): void {
    this.tryAgain.emit();
  }
}
