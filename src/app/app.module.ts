import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-flowerservice';

import { AppComponent }  from './app.component';
import { FlowersComponent }  from './flowers.component';
import { FlowerFeaturesComponent } from './flower-features.component';
import { FlowerService } from './flower.service';
import { DashboardComponent }  from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { FlowerSearchComponent }  from './flower-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FlowersComponent,
    FlowerFeaturesComponent,
    FlowerSearchComponent
  ],
  providers: [
    FlowerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
