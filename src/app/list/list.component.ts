import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listObj: any;
  @Output() newTask = new EventEmitter();
  @Output() removeListByID = new EventEmitter();
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
  emitToRemoveList() {
    this.removeListByID.emit(this.listObj.id);
  }
}
