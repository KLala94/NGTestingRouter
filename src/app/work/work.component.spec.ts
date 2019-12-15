import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent }  from './bad-work/bad-work.component';

import { WorkComponent } from './work.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkRoutingModule, workRoutes } from './work-routing.module';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import {Router} from "@angular/router";
fdescribe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(workRoutes)],
    declarations: [
      WorkComponent,
      GoodWorkComponent,
      BadWorkComponent

    ]
  });

  router = TestBed.get(Router);
  location = TestBed.get(Location);

  fixture = TestBed.createComponent(WorkComponent);
  router.initialNavigation();
});
it('navigate to "./goodwork" takes you to /good.work', fakeAsync(() => {
  router.navigate(['goodwork']);
  tick();
  expect(location.path()).toBe('/goodwork');
}));
it('navigate to "./badwork" takes you to /bad.work', fakeAsync(() => {
  router.navigate(['badwork']);
  tick();
  expect(location.path()).toBe('/badwork');
}));
});
