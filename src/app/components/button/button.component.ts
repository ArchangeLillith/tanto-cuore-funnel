import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  //Passed in from the html element that's attached
  @Input() text: string;
  @Input() color: string;
  //The signal thrown when the event is clicked, communicating back up to the parent that this button has had been clickd, therefore generating this signal
  @Output() btnClick = new EventEmitter();

  //The function that emits the signal that the parent event is listening for
  onClick() {
    this.btnClick.emit();
  }
}
