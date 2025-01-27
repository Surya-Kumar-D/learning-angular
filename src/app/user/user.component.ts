import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'users/' + this.avatar;
  }
  get userName() {
    return this.name;
  }
  onSelectUser() {}
}
