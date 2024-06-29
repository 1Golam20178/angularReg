
import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {MatButtonMoudle,MatButtonToggleMoudle} from '@angular/material'

@NgModule({

  declarations:[],
  imports: [BrowserModule, ReactiveFormsModule, AppComponent,MatButtonMoudle,MatButtonToggleMoudle],
  providers:[],
  bootstrap:[],



})
export class AppModule{}

