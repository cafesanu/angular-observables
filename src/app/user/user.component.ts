import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public id: number;

  constructor(
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) {
  }

  public ngOnInit(): void {
    this._route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params.id);
        }
      );
  }

  public onActivate(): void {
    this._usersService.userActivated.next(this.id);
  }
}
