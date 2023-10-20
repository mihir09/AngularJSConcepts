import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[betterhighlight]'
})
export class betterHighlightDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background: String = 'gold'

  @HostListener('mouseenter') onMouseEnter(){
    this.background='red'
  }

  @HostListener('mouseleave') onMouserLeave(){
    this.background='gold'
  }


}
