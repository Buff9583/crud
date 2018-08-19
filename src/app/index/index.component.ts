import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/user.model';
import {CrudUserService} from '../services/crud-user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
Userlist: Observable<UserModel[]>;
  constructor(private userservice: CrudUserService) {
    this.Userlist =  this.userservice.getUserList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  ngOnInit() {
  }

}
