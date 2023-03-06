import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
interface User{
  name:string,
  age:number,
  country:string
}
export class App {
  name = 'Angular';
  user:User;
  userList: User[] = []

  addUser(){
    this.userList.push(this.user)
  }

  deleteUser(index: number){
    this.user.splice(index,1)
  }

}

bootstrapApplication(App);
