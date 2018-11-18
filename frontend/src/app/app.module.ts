import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestCardComponent } from './request-list/request-card/request-card.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestDetailsBioComponent } from './request-details/request-details-bio/request-details-bio.component';
import { RequestDetailsContentComponent } from './request-details/request-details-content/request-details-content.component';

import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestCardComponent,
    RequestDetailsComponent,
    RequestDetailsBioComponent,
    RequestDetailsContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBkh1YIOLKzCAiaucNZ85GmlxihDVgKM0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
