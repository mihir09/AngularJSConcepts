import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]'
})
export class setBackgroundDirective implements OnInit{

  constructor(private element: ElementRef) { 
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = '#f2f5f4'
  }

}
