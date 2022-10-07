import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { HttpClientModule }       from '@angular/common/http'

import { AppComponent } from './app.component';
import { BookingComponent } from './booking.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { UiModule } from '@atomus-lee/ui';

import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatIconModule }          from '@angular/material/icon'
import { MatCardModule}           from '@angular/material/card'
import { MatFormFieldModule }     from '@angular/material/form-field'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
