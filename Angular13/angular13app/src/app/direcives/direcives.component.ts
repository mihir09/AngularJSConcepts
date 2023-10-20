import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-direcives',
  template: `
    <!-- syntax sugar for ng-template -->
     <!-- <h2 *ngIf="displayName; then thenblock; else elseblock">
        The Directievs
     </h2>
     
      

     <ng-template #elseblock>
      <h2>
        This template is Else 
        <ng-container *ngTemplateOutlet="thenblock"></ng-container>
      </h2>
     </ng-template>
     <ng-template #thenblock>
      <h2>
        This template is Then
      </h2>
     </ng-template> -->


     <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color]="color">This is the RED div</div>
      <div *ngSwitchCase="'blue'" [style.color]="color">This is the BLUE div</div>
      <div *ngSwitchCase="'gold'" [style.color]="color">This is the GOLD div</div>
      <div *ngSwitchCase="'green'" [style.color]="color">This is the GREEN div</div>
      <div *ngSwitchDefault>This is the not an option</div>
     </div> 
     
     <ul *ngFor="let num of numbers; even as e">
      <li (click)="fireEvent(num)" *ngIf="num % 2 === 0">{{ num }} {{e}}</li>
    </ul>
     
  `,
  styles: [`
     
  `]
})
export class DirecivesComponent {
     displayName = false

     public color = "red"
     @Input("childnumbers") public numbers:any
     @Output() public childEvent = new EventEmitter()

    //  public numbers = [0,1,2,3,4,5,6,7,8]

    fireEvent(n:Number){
      this.childEvent.emit(n);
    }
}
