import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = "Welcome John"
    EmpID = "EMP14"
    disabled = false 
    public numbers = [0,1,2,3,4,5,6,7,8]
    public num:Number = 0
}
