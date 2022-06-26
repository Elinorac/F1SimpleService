import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { F1SimpleService } from './f1-simple.service';

import { AppComponent } from './app.component';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';
import { RacesComponent } from './races/races.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent,
    RacesComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [F1SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
