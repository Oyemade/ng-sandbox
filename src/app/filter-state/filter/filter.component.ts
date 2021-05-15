import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterData: { name: string; email: string } = {
    name: this.route.snapshot.queryParamMap.get('name') || '',
    email: this.route.snapshot.queryParamMap.get('email') || '',
  };

  @Output() filterTransport = new EventEmitter(); // Emit values to the parent component

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sendData();
  }

  sendData(): void {
    // Emit values to the parent component
    this.filterTransport.emit(this.filterData);
  }
}
