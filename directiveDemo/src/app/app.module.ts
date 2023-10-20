import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { setBackgroundDirective } from './setBackground.directive';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { betterHighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    betterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
