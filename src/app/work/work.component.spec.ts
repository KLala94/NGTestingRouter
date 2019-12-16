import { async, ComponentFixture, TestBed, flush } from '@angular/core/testing';

import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent }  from './bad-work/bad-work.component';

import { WorkComponent } from './work.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkRoutingModule, workRoutes } from './work-routing.module';
import {Location} from '@angular/common';
import {fakeAsync, tick} from '@angular/core/testing';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';
import { WorkingComponent } from '../working/working.component';
fdescribe('Router: ChildrenApp', () => {

  let location: Location;
  let router: Router;
  let fixture;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([
  {path: 'goodwork', component: GoodWorkComponent},
  {path: 'badwork', component: BadWorkComponent},
  {path: 'working/:id', component: WorkingComponent}])],
    declarations: [
      WorkComponent,
      GoodWorkComponent,
      BadWorkComponent,
      WorkingComponent

    ]
  }).compileComponents();

  router = TestBed.get(Router);
  location = TestBed.get(Location);

  fixture = TestBed.createComponent(WorkComponent);
  router.initialNavigation();
});
beforeEach(fakeAsync(() => {
  router = TestBed.get(Router);
  location = TestBed.get(Location);
  fixture = TestBed.createComponent(WorkComponent);
  router.navigateByUrl('/');
  advance();
}));

function advance(): void {
  flush();
  fixture.detectChanges();
}
it('navigate to "./goodwork" takes you to /goodwork', fakeAsync(() => {
  const menu = fixture.debugElement.query(By.css('.goodwork'));
  menu.triggerEventHandler('click', { button: 0 });
  advance();
  expect(location.path()).toBe('/goodwork');
}));
it('navigate to "./badwork" takes you to /badwork', fakeAsync(() => {
  const menu = fixture.debugElement.query(By.css('.badwork'));
  menu.triggerEventHandler('click', { button: 0 });
  advance();
  expect(location.path()).toBe('/badwork');
}));
it('navigate to working with id', fakeAsync(() => {
  const menu = fixture.debugElement.query(By.css('button'));
  menu.triggerEventHandler('click', null);
  advance();
  expect(location.path()).toBe('/working/1');
}));
});
