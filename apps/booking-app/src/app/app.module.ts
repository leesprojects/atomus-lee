import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }       from '@angular/common/http'

import { AppComponent }           from './app.component';
import { BookingComponent }       from './components/bookings/booking.component';
import { NavBarComponent }        from './components/navbar/navbar.component';
import { UiModule }               from  '@atomus-lee/ui';

import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatIconModule }          from '@angular/material/icon'
import { MatCardModule}           from '@angular/material/card'
import { MatFormFieldModule }     from '@angular/material/form-field'
import { MatInputModule }         from '@angular/material/input'
import { MatButtonModule }        from '@angular/material/button';
import { FormsModule }            from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
