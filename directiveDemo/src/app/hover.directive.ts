import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '0px 0px');
    this.renderer.setStyle(this.element.nativeElement, 'margin', '0px 0px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

}
