/*
 * The ColumnSettings interface consists of a primaryKey property which holds the * cell value, a header property which is used as the column header, and a format * of enum type PipeFormat to specify formatting. The PipeFormat could be
 * DEFAULT, CURRENCY OR DATE, other formats can be added in the future.
 */

export interface ColumnSetting {
  primaryKey: string;
  header?: string;
  format?: PipeFormat;
  // alternativeKeys?: string[];
}

export interface ButtonSettings {
  title: string;
  func: any;
  class?: string[];
  params?: Object;
}

export enum PipeFormat {
  DEFAULT,
  CURRENCY,
  DATE,
  PERCENTAGE,
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  loyaltyReward: boolean;
  totalSpent: number;
}

export interface Transaction {
  date: string;
  amount: number;
  customer: string;
  discount: number;
}
