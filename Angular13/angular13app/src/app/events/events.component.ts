import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <table>
    <tr><td><input #v1 type="text"/></td><td><input #v2 type="text"/></td></tr>
    <tr><td><input type="button" (click)="onClick(v1, v2)" value="ADD"/></td><td>
      <label [style.color]="'white'" [style.backgroundColor]="'blue'" id="label">Result:{{result}}</label></td></tr>
  </table>
  `,
  styles: [``]
})
export class EventsComponent {
  result:any 
   onClick(v1:any, v2:any)
   {
    // console.log(parseInt(v1)+parseInt(v2))
    console.log(Number(v1.value)+Number(v2.value))
    // document.getElementById("#label?\").innerHTML = (Number(v1)+Number(v2)).toString()
    // document.getElementById("label")!.innerHTML += (Number(v1)+Number(v2)).toString() 
    // you can just use one way binding right?
    this.result = (Number(v1.value)+Number(v2.value)).toString() 
    // document.getElementsByName("input")[0].innerHTML = ""
    v1.value = ""
    v2.value = ""
   }
}
