import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';


import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarService} from './car.service';
import {NewCarComponent} from './new-car/new-car.component';
import { ProspectService } from './prospect.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [CarService, ProspectService],
  bootstrap: [AppComponent],
  entryComponents: [NewCarComponent]
})
export class AppModule {
}
