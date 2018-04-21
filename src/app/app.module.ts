import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { EditmapComponent } from './components/map/editmap/editmap.component';

//Material module
import { MaterialModule } from './material.module';

//Angular Google Maps
import { AgmCoreModule } from '@agm/core';




@NgModule({
  entryComponents: [
    EditmapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVg1YPgQzlstEH0f2Qin74J2KsyEalgdM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
