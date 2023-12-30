import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueText]',
})
export class BlueTextDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
