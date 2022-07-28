import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  todos = [
    {
      txt: "Faire la vaiselle",
      completed: true
    },
    {
      txt: "Faire les courses",
      completed: true
    },
    {
      txt: "Nourrir les chats",
      completed: true
    },
    {
      txt: "Arroser les plantes",
      completed: false
    }
  ]

}
