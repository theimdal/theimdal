import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home.component';
import { SiteService } from './site.service';
import {SiteFormComponent} from "./site-form.component";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent,
    SiteFormComponent
  ],
  providers: [
    SiteService
  ],
})
export class HomeModule { }
