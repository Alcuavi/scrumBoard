import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = JSON.parse(localStorage.getItem('lists'))  || [];
  newListText: string;
  addList() {
    const newName = this.newListText.trim();
    if (newName !== '') {
      const newList = {
        name: newName,
        tasks: []
      };
      this.lists.push( newList );
      localStorage.setItem('lists', JSON.stringify(this.lists));
      this.newListText = '';
    }
  }
}

