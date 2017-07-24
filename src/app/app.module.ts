import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { PaintService } from './paint/paint.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './converter/converter.service'

@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PaintService, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
