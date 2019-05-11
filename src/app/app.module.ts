import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms'; 

// PrimeNG modules
import {ChipsModule} from 'primeng/chips';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChipsModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
