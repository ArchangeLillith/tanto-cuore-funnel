import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() text: string;
  //The signal thrown when the event is clicked, communicating back up to the parent that this button has had been clickd, therefore generating this signal
  @Output() btnClick = new EventEmitter();
}
