import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
//Material module
import { MaterialModule } from './material.module';

//Angular Google Maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVg1YPgQzlstEH0f2Qin74J2KsyEalgdM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
