import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#f1948a')
    this.renderer.addClass(this.element.nativeElement, 'custom-container')
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'Checking title')
  }

}
