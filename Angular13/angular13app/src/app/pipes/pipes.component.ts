import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
      
       <h2>{{name | lowercase}}</h2>
       <h2>{{name | uppercase}}</h2>
       <h2>{{name | titlecase}}</h2>
       <h2>{{name | slice:3:7}}</h2>

       <h2>{{533.678 | number:'5.4-5'}}</h2>

       <h2>{{0.25 | percent}}</h2>
       <h2>{{0.25 | currency}}</h2>
       <h2>{{0.25 | currency:'EUR'}}</h2>
       <h2>{{0.25 | currency:'INR'}}</h2>

       <h2>{{date}}</h2>
       <h2>{{date | date:'short' }}</h2>
       <h2>{{date | date:'shortDate'}}</h2>
       <h2>{{date | date:'shortTime'}}</h2>
       <h2>{{date | date:'dd-MMMM-yyyy'}}</h2>
  `,
  styles: [``]
})
export class PipesComponent {
  public name = "john smith"

  public date = new Date()
}
