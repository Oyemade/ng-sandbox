import { Component, OnInit } from '@angular/core';
import { Customer, Transaction } from '../model';

@Component({
  selector: 'app-static-table',
  templateUrl: './static-table.component.html',
  styleUrls: ['./static-table.component.scss'],
})
export class StaticTableComponent implements OnInit {
  customers: Customer[] = [
    {
      name: 'Faith Joy',
      email: 'fj@stooli.com',
      phone: '09088776655',
      loyaltyReward: true,
      totalSpent: 400,
    },
    {
      name: 'Ayo Benson',
      email: 'aydot@jk.com',
      phone: '08128743650',
      loyaltyReward: false,
      totalSpent: 59000,
    },
    {
      name: 'Ade Ayobami',
      email: 'ade@frtt.com',
      phone: '08027437650',
      loyaltyReward: false,
      totalSpent: 200,
    },
    {
      name: 'Valentine Awe',
      email: 'val@errt.com',
      phone: '09077214562',
      loyaltyReward: true,
      totalSpent: 120000,
    },
    {
      name: 'Rahman Hafeez',
      email: 'rfeez@xvxw.com',
      phone: '09033487655 ',
      loyaltyReward: true,
      totalSpent: 3490000,
    },
  ];

  transactions: Transaction[] = [
    {
      date: '2021-02-11T08:07:22',
      amount: 60000,
      customer: 'Valentine Awe',
      discount: 3,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 300,
      customer: 'Faith Joy',
      discount: 0,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 25000,
      customer: 'Ayo Benson',
      discount: 1,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 100000,
      customer: 'Rahman Hafeez',
      discount: 4,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 1000,
      customer: 'Ade Ayobami',
      discount: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  cB(customer: Customer) {
    alert(
      `Customer name: ${customer.name} spent ₦${customer.totalSpent}. Email: ${customer.email}`
    );
  }
}
