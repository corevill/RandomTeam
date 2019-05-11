import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms'; 

// PrimeNG modules
import {ChipsModule} from 'primeng/chips';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';


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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
