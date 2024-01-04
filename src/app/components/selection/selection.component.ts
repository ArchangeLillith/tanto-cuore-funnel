import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
})
export class SelectionComponent {
  @Input() format: string;
  @Input() numbers: number[] = [...Array(100).keys()];
  @Input() text: string;

  @Output() number: number;
  @Output() set: string;

  //The signal thrown when the event is clicked, communicating back up to the parent that this button has had been clickd, therefore generating this signal
  @Output() selectionChange = new EventEmitter();

  setFormat: boolean = false;
  numberFormat: boolean = false;

  ngOnInit(): void {
    //calls to the service and subscribes to watch for a signal back, very similar to async code
    if (this.format === 'numberFormat') {
      this.numberFormat = true;
    } else {
      this.setFormat = true;
    }
  }

  onChange(event: any) {
    this.selectionChange.emit(event);
  }

  setTitles: string[] = [
    'Romantic Vacation',
    'Base',
    'Expanding the House',
    'Oktoberfest',
    'Winter Romance',
  ];
}
