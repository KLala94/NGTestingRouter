import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
// import { FormsModule }    from '@angular/forms';

import { WorkComponent }     from './work.component';
import { WorkRoutingModule } from './work-routing.module';

import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent }  from './bad-work/bad-work.component';
import { WorkingComponent } from '../working/working.component';

@NgModule({
  declarations: [
    WorkComponent,
    GoodWorkComponent,
    BadWorkComponent,
    // WorkingComponent
  ],
  imports: [
    CommonModule,
  //  FormsModule,
    WorkRoutingModule

  ],
  exports: [
    WorkComponent,
    BadWorkComponent,
    GoodWorkComponent,
    // WorkingComponent
  ]
  //providers: [],
  //bootstrap: [WorkComponent]
})
export class WorkModule {}
