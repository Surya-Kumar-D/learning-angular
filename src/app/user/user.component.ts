import { Component, EventEmitter, Input, Output } from '@angular/core';

// export type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

export interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }
  get userName() {
    return this.user.name;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
