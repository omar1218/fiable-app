import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiableTrainingListComponent } from './fiable-training-list/fiable-training-list.component';
import { FiablePromotionEligibilityComponent } from './fiable-promotion-eligibility/fiable-promotion-eligibility.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    FiableTrainingListComponent,
    FiablePromotionEligibilityComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
