import { Component, Input, OnInit } from '@angular/core';
import { ButtonSettings, ColumnSetting } from '../model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  /* Here we are expecting 4 inputs: 
   * title: which represents the tables title
   * records: which represents the table data 
   * settings: which represents configuration of each cell 
   * buttons: which represents button configurations
   *  
   * The interface for the ColumnSetting and ButtonSettings are shown in the 
   * model.ts file. 

   * In the ngOnInit method we check if a buttons input is passed and then 
   * initialize it as an empty array if undefined. We perform the same check on 
   * the settings input, if its undefined we generate a default settings 
   * configuration. 
   *
   */
  @Input() title: any[]; // Table Title
  @Input() records: any[]; // Table Data
  @Input() settings: ColumnSetting[]; // Table Configuration Settings
  @Input() buttons: ButtonSettings[]; // Button Settings - Optional

  columnMaps: ColumnSetting[]; // Placeholder for storing table configuraion settings

  buttonHeader: string; // Button <th> text

  constructor() {}

  ngOnInit(): void {
    if (!this.buttons) this.buttons = [];

    // Determine buttton header text
    this.buttons.length > 1
      ? (this.buttonHeader = 'Actions')
      : (this.buttonHeader = 'Action');

    if (this.settings) {
      // If settings are provided
      this.columnMaps = this.settings;
    } else {
      // If settings are not provided
      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }
}
