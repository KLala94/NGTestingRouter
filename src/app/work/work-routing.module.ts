import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from '../../home/home.component';
import { WorkComponent } from './work.component';
import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent } from './bad-work/bad-work.component';
const routes: Routes = [];

export const workRoutes: Routes = [
  {
  path: '',
  component: WorkComponent,
  children: [
    {
      path: '',
      children: [
        { path: 'goodwork', component: GoodWorkComponent },
        { path: 'badwork', component: BadWorkComponent },
        { path: '', component: GoodWorkComponent }
      ]
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
