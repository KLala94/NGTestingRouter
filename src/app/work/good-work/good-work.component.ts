import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { WorkComponent } from '../../work/work.component';
import { AppModule } from '../../app.module';
@Component({
  selector: 'app-good-work',
  templateUrl: './good-work.component.html',
  styleUrls: ['./good-work.component.scss']
})
export class GoodWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
