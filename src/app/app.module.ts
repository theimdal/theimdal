import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ChartModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ChartModule,
    HomeModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
