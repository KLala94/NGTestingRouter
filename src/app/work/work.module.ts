import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
//import { FormsModule }    from '@angular/forms';

import { WorkComponent }     from './work.component';
import { WorkRoutingModule } from './work-routing.module';

import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent }  from './bad-work/bad-work.component';

@NgModule({
  declarations: [
    WorkComponent,
    GoodWorkComponent,
    BadWorkComponent
  ],
  imports: [
    CommonModule,
  //  FormsModule,
    WorkRoutingModule

  ]//,
  //providers: [],
  //bootstrap: [WorkComponent]
})
export class WorkModule {}
