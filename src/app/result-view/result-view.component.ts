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
  @Input() username: string;

  @Output() tryAgain: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.formCriteriaMessage();
  }

  formCriteriaMessage(): void {
    // TODO: when multiple timer variants are created,
    // need to create calculation algorithm for mocked criteria.
    // For now though, this will do
    const c = this.count;
    switch (true) {
      case c >= 20:
        this.criteriaMessage = criteria.VERY_GOOD;
        break;
      case c >= 15:
        this.criteriaMessage = criteria.GOOD;
        break;
      case c >= 10:
        this.criteriaMessage = criteria.DECENT;
        break;
      case c >= 5:
        this.criteriaMessage = criteria.BAD;
        break;
      case c >= 0:
        this.criteriaMessage = criteria.VERY_BAD;
        break;

      default:
        this.criteriaMessage = criteria.ERROR;
        break;
    }
  }

  handleTryAgainClick(): void {
    this.resetCount();
    this.tryAgain.emit();
  }

  resetCount(): void {
    this.count = 0;
  }
}
