import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  // template: `
  // <table>
  //   <tr><td><input #v1 type="text"/></td></tr>
  //   <tr><td><input #v2 type="text"/></td></tr>
  //   <tr><td><input type="button" (click)="onClick(v1.value,v2.value)" value="ADD"/></td></tr>
  //   <tr><td><label [style.background-color]="'lightblue'" #label id="label">Result</label></td></tr>
  // </table>`,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  onClick(v1:any, v2:any){
    document.getElementById("label")!.innerHTML = (Number(v1)+Number(v2)).toString()
    alert(Number(v1)+Number(v2))
  }

  numbers = [1,2,3,5,6]
}
