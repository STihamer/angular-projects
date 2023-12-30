import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedRadioButton: string = 'All';

  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() medium: number = 0;
  @Input() advanced: number = 0;
  @Input() books: any;

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
  }
}
