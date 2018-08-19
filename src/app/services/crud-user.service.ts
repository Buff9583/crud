import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {UserModel} from '../model/user.model';

@Injectable()
export class CrudUserService {
  private UserListRef;
  constructor(private db: AngularFireDatabase) {
    this.UserListRef = this.db.list<UserModel>('User-list');
  }
  getUserList() {
    return this.UserListRef;
  }

  addUser(user: UserModel) {
    return this.UserListRef.push(user);
  }
  updateUser(user: UserModel) {
    return this.UserListRef.update(user.key, user);
  }

  removeUser(user: UserModel) {
    return this.UserListRef.remove(user.key);
  }

}
