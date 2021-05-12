import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/dynamic-table/model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: Customer;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the data afrom the Activated route queryParamMap snapshot
    this.data = JSON.parse(this.route.snapshot.paramMap.get('customerData'));

    // To get the customer ID
    // this.route.snapshot.paramMap.get('id');
  }
}
