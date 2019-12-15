import { NgModule }       from '@angular/core';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from '../../work/work.component';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-bad-work',
  templateUrl: './bad-work.component.html',
  styleUrls: ['./bad-work.component.scss']
})
export class BadWorkComponent implements OnInit {
work:WorkComponent;
constructor() {}


  ngOnInit() {
  }

}
