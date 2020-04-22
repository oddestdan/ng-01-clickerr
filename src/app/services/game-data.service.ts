import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  private _title = 'clickerr';
  private _defaultName = 'Alyx Vance';
  // Would need to set default values due to issues with manual re-routing
  private _username: string;
  private _count: number;
  private _timer: number;

  constructor() {}

  get title(): string {
    return this._title;
  }
  get defaultName(): string {
    return this._defaultName;
  }
  get username(): string {
    return this._username;
  }
  set username(username: string) {
    this._username = username || this._defaultName;
  }
  get count(): number {
    return this._count;
  }
  set count(count: number) {
    this._count = count;
  }
  get timer(): number {
    return this._timer;
  }
  set timer(timer: number) {
    this._timer = timer;
  }
}
