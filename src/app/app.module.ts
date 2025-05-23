import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { MarketModule } from './market/market.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
declarations: [
  AppComponent
  ],

  imports: [
  BrowserModule,
  CoreModule,
  AppRoutingModule,
  SharedModule,  
  MarketModule
  ],

  bootstrap: [AppComponent]
})

export class AppModule {}




