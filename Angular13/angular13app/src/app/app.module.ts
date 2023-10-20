import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EventsComponent } from './events/events.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { DirecivesComponent } from './direcives/direcives.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    EventsComponent,
    TwowayComponent,
    DirecivesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
