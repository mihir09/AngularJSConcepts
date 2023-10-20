import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
     <input type="text" [(ngModel)]="name">
     {{name}}
  `,
  styles: [``]
})
export class TwowayComponent {
   public name = "John"
}
