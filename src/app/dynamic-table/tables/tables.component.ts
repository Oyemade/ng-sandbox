import { Component, OnInit } from '@angular/core';
import {
  ButtonSettings,
  ColumnSetting,
  Customer,
  PipeFormat,
  Transaction,
} from '../model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
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

  customerTableSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Full Name',
    },
    {
      primaryKey: 'email',
      header: 'Email',
    },
    {
      primaryKey: 'phone',
      header: 'Phone Number',
    },
    {
      primaryKey: 'loyaltyReward',
      header: 'Loyal Customer',
    },
    {
      primaryKey: 'totalSpent',
      header: 'Total Spent',
      format: PipeFormat.CURRENCY,
    },
  ];

  customerButtonSettings: ButtonSettings[] = [
    {
      title: 'Open',
      params: ['name', 'totalSpent', 'email', 'phone'],
      func: (name, totalSpent, email, phone) => {
        alert(
          `Customer name: ${name} spent ₦${totalSpent}. Email: ${email}. Phone: ${phone}`
        );
      },
    },
  ];

  transactionTableSettings: ColumnSetting[] = [
    {
      primaryKey: 'date',
      header: 'Date',
      format: PipeFormat.DATE,
    },
    {
      primaryKey: 'amount',
      header: 'Amount',
      format: PipeFormat.CURRENCY,
    },
    {
      primaryKey: 'customer',
      header: 'Customer Name',
    },
    {
      primaryKey: 'discount',
      header: 'Discount',
      format: PipeFormat.PERCENTAGE,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
