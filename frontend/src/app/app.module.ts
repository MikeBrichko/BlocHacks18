import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestCardComponent } from './request-list/request-card/request-card.component';
import { RequestDetailsComponent } from './request-details/request-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestCardComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
