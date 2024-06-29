import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormGroup, FormControl, FormControlName, ReactiveFormsModule,Validators} from '@angular/forms'
import {MatButton} from "@angular/material/button";
import {MatButtonToggle} from "@angular/material/button-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MatButton, MatButtonToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reg-project';

  regFrom=new FormGroup(
    {
      employee:new FormControl(''),
      degisnation:new FormControl(''),
      primary_degisnation:new FormControl,
      start_date:new FormControl,
      end_date:new FormControl,
      room_number:new FormControl,
      seating_zone:new FormControl,
      special_position :new FormControl

    }
  )

  registation(){

    console.warn(this.regFrom.value)
  }
}
