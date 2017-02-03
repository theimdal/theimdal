import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home.component';
import { SiteService } from './site.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    SiteService
  ],
})
export class HomeModule { }
