import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestCardComponent } from './request-list/request-card/request-card.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestDetailsBioComponent } from './request-details/request-details-bio/request-details-bio.component';
import { RequestDetailsContentComponent } from './request-details/request-details-content/request-details-content.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestCardComponent,
    RequestDetailsComponent,
    RequestDetailsBioComponent,
    RequestDetailsContentComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBkh1YIOLKzCAiaucNZ85GmlxihDVgKM0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
