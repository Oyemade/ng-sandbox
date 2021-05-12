import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/dynamic-table/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // Store latest filter values
  filterStateStore = {
    name: this.route.snapshot.queryParamMap.get('name') || '',
    email: this.route.snapshot.queryParamMap.get('email') || '',
  };

  // Customer data
  customers: Customer[] = [
    {
      name: 'Faith Joy',
      email: 'fj@stooli.com',
      phone: '09088776655',
      loyaltyReward: true,
      totalSpent: 400,
      id: 1,
    },
    {
      name: 'Ayo Benson',
      email: 'aydot@jk.com',
      phone: '08128743650',
      loyaltyReward: false,
      totalSpent: 59000,
      id: 2,
    },
    {
      name: 'Ade Ayobami',
      email: 'ade@frtt.com',
      phone: '08027437650',
      loyaltyReward: false,
      totalSpent: 200,
      id: 3,
    },
    {
      name: 'Valentine Awe',
      email: 'val@errt.com',
      phone: '09077214562',
      loyaltyReward: true,
      totalSpent: 120000,
      id: 4,
    },
    {
      name: 'Rahman Hafeez',
      email: 'rfeez@xvxw.com',
      phone: '09033487655 ',
      loyaltyReward: true,
      totalSpent: 3490000,
      id: 5,
    },
  ];

  // Observable customer data
  customers$ = of(this.customers);

  ngOnInit(): void {
    this.acceptFilter(this.filterStateStore);
  }

  // Filter observable customer data based on filter values
  acceptFilter(filters: { name: string; email: string }) {
    this.filterStateStore = filters;

    this.customers$ = this.customers$.pipe(
      map((customers) =>
        customers.filter(
          (customer) =>
            customer.name
              .toLocaleLowerCase()
              .includes(filters.name.toLocaleLowerCase()) &&
            customer.email
              .toLocaleLowerCase()
              .includes(filters.email.toLocaleLowerCase())
        )
      )
    );
  }

  // Navigation
  navigate(value: Customer) {
    this.router.navigate(
      [
        `/filterState/${value.id}`, // Target URL
        {
          customerData: JSON.stringify(value), // Optional params
        },
      ],
      {
        queryParams: this.filterStateStore, // Query params
      }
    );
  }
}
