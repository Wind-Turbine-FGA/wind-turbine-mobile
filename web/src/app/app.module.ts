import { BrowserModule } from '@angular/platform-browser';
import { TurbineDataService } from './services/turbine-data.service';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoConflictStyleCompatibilityMode} from '@angular/material';
import { AppComponent } from './app.component';
import { TurbineDataComponent } from './components/turbine-data/turbine-data.component';
import { ChartComponent } from './components/chart/chart.component';
import { HistoricComponent } from './components/historic/historic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TurbineDataComponent,
    ChartComponent,
    HistoricComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    NoConflictStyleCompatibilityMode,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
  ],
  providers: [TurbineDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
