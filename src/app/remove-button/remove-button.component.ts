import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css']
})
export class RemoveButtonComponent {
  @Output() action = new EventEmitter();
  emitAction() {
    this.action.emit();
  }
}
