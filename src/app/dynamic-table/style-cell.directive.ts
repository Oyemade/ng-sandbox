import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/*
 * Here we expect to inputs appStyleCell which represents the cell value and the * key which represents the cell's key. We also inject ElementRef and Renderer2
 * so we can update the view. Now that we have the inputs, we can set custom
 * views based on incoming values.
 *
 */

@Directive({
  selector: '[appStyleCell]',
})
export class StyleCellDirective {
  @Input() appStyleCell: any; // Represents the cells value
  @Input() key: string; // Represents the cells key

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appStyleCell === undefined) {
      // Empty cell formatting
    }

    if (typeof this.appStyleCell === 'number') {
      // Number formatting
    }

    if (this.key === 'loyaltyReward') {
      if (this.appStyleCell === true) {
        this.renderer.setStyle(this.el.nativeElement, 'color', '#13a500');
        this.el.nativeElement.innerHTML = 'Yes';
      }

      if (this.appStyleCell === false) {
        this.renderer.setStyle(this.el.nativeElement, 'color', '#c9ae1c');
        this.el.nativeElement.innerHTML = 'No';
      }
    }
  }
}
