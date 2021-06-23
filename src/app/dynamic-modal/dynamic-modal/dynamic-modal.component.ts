import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss'],
})
export class DynamicModalComponent implements OnInit {
  @Input() modalType: string; // primary, right-side, confirmation
  @Input() header: string;
  @Input() subHeader: string;
  @Input() buttonText: string; // Optional
  @Input() isDisabled: string;

  @Output() cancel = new EventEmitter<any>();
  @Output() submit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
