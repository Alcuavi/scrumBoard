import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listObj: object;
  @Output() newTask = new EventEmitter();
  newTaskText: string;
  addNewTask() {
    const text = this.newTaskText.trim();
    if (text !== '') {
      this.newTask.emit(
        {
          text,
          listId: this.listObj.id
        }
      );
      this.newTaskText = '';
    }
  }
}
