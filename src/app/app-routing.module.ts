import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkModule } from './work/work.module';
import { GoodWorkComponent } from './work/good-work/good-work.component';
import { BadWorkComponent } from './work/bad-work/bad-work.component';
import { WorkRoutingModule } from './work/work-routing.module';
import { WorkingComponent } from './working/working.component';
const routes: Routes = [];

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'working/:id', component: WorkingComponent },
  { path: 'works', loadChildren: './work/work.module#WorkModule' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
