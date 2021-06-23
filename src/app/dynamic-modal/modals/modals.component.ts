import { Component, OnInit } from '@angular/core';
import { ModalMetaData } from '../model';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  // Toggle modal
  showModal = false;

  // Modal Properties
  modalData: ModalMetaData = {
    modalType: 'right-side',
    header: 'Hello World',
    subHeader: 'Dynamic modal in action...',
    buttonText: 'Submit',
  };

  // Button vaildation
  buttonDisabled: 'VALID' | 'INVALID' = 'VALID';
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('Submit clicked');
  }
}
