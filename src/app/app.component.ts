import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = [
    {
      name: 'to do',
      tasks: [
        {
          text: 'Aprender angular router'
        }
      ]
    },
    {
      name: 'doing',
      tasks: [
        {
          text: 'Aprender angular components'
        },
        {
          text: 'Aprender react'
        },
        {
          text: 'Aprender vue'
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          text: 'Aprender jquery'
        }
      ]
    }
  ];
}
