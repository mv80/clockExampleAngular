import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HourReporterComponent } from './hour-reporter/hour-reporter.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MainContainerComponent,
    HourReporterComponent,
    ClickCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
