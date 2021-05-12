import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filterData: { name: string; email: string }; // Initial filter values if any

  @Output() filterTransport = new EventEmitter(); // Emit values to the parent component

  constructor() {}

  ngOnInit(): void {}

  sendData(): void {
    // Emit values to the parent component
    this.filterTransport.emit(this.filterData);
  }
}
