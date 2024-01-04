import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  //Passed in from the html element that's attached
  @Input() text: string;
  isChecked: boolean = false;

  //The signal thrown when the event is clicked, communicating back up to the parent that this button has had been clickd, therefore generating this signal
  @Output() checkbox = new EventEmitter();

  //The function that emits the signal that the parent event is listening for
  btnClick(text: string) {
    this.checkbox.emit(text);
  }
}
