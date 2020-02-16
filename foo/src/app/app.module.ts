import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CardComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(CardComponent, {injector: injector});
    customElements.define('app-card', custom);
  }
  ngDoBootstrap() {}
 }
