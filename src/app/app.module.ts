import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './/routing.module';
import { MoreComponent } from './more/more.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { KnockoutComponent } from './knockout/knockout.component';
import { IllusionComponent } from './illusion/illusion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoreComponent,
    CopyrightComponent,
    KnockoutComponent,
    IllusionComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
