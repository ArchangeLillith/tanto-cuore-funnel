import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  //Passed in from the html element that's attached
  @Input() text: string;
  @Input() color: string;
  //The signal thrown when the event is clicked, communicating back up to the parent that this button has had been clickd, therefore generating this signal
  @Output() textChange = new EventEmitter();

  //The function that emits the signal that the parent event is listening for
  onChange(htmlEvent: Event) {
    this.textChange.emit(htmlEvent);
  }
}
