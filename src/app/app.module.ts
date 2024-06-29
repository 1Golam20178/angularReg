
import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

// @ts-ignore
import {MatButtonModule,MatButtonToggleModule,MatRadioModule,MatSelectModule,MatInputModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material'

@NgModule({

  declarations:[],
  imports: [BrowserModule, ReactiveFormsModule, AppComponent,MatButtonModule,MatButtonToggleModule,MatRadioModule,MatSelectModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule],
  providers:[],
  bootstrap:[],



})
export class AppModule{}

