import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { WorkComponent } from './work/work.component';
//import { GoodWorkComponent } from './work/good-work/good-work.component';
//import { BadWorkComponent } from './work/bad-work/bad-work.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //WorkComponent,
    //GoodWorkComponent,
    //BadWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
