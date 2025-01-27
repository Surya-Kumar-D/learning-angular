import { Component } from '@angular/core';

import { DUMMY_USERS } from '../users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }

  get userName() {
    return this.selectedUser.name;
  }

  get userId() {
    return this.selectedUser.id;
  }
}
