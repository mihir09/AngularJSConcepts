import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  public successClass = "text-success"
  public hasError = false
  public isSpecial = true
  public bgColor = "purple"

  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyle = {
    color: "blue",
    fontStyle:"italic"
  }
}
