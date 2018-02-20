import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PincodeComponent } from './pincode/pincode.component';


@NgModule({
  declarations: [
    AppComponent,
    PincodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
