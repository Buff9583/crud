import {Component, OnInit} from '@angular/core';
import {UserModel} from '../model/user.model';
import {CrudUserService} from '../services/crud-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: UserModel = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: CrudUserService, public router: Router) {

  }

  ngOnInit() {
  }

  addUser(user: UserModel) {
    this.userService.addUser(user).then(ref => {
      this.router.navigate(['/main']);
    });
  }
}
