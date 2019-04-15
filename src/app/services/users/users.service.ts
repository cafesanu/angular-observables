import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userActivated: Subject<number> = new Subject();

  constructor() { }
}
