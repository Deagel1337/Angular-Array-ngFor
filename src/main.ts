import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
})
export class App implements OnInit{
  user: User 
  userList: User[] = [];
  ngOnInit(){
    this.resetForm()
  }
  addUser() {
    this.userList.push(this.user);
    this.resetForm();
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
  }
  resetForm(){
    this.user = {name:null,age:"",country:""}
  }
}
interface User {
  name: string;
  age: string;
  country: string;
}
bootstrapApplication(App);
