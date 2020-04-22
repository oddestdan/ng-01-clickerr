import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent implements OnInit {
  username: string;
  @Input() defaultName: string;
  @Output() saveUsername: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleNameClick(_): void {
    this.saveUsername.emit(this.username);
    // TODO: save username in between using services
    this.router.navigateByUrl('/game');
  }
}
