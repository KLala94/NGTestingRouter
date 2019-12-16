import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { BadWorkComponent } from './work/bad-work/bad-work.component';
import { GoodWorkComponent } from './work/good-work/good-work.component';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import {Location} from '@angular/common';
import {fakeAsync, tick, flush} from '@angular/core/testing';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { By } from '@angular/platform-browser';
import { WorkingComponent } from './working/working.component';
fdescribe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [
        AppComponent,
        HomeComponent,
        WorkComponent,
        BadWorkComponent,
        GoodWorkComponent,
        WorkingComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });
  // xit('navigate to "Home" takes you to /home', fakeAsync(() => {
  //   router.navigate(['home']);
  //   tick();
  //   expect(location.path()).toBe('/home');
  // }));
  // xit('navigate to "work" takes you to /work', fakeAsync(() => {
  //   router.navigate(['work']);
  //   tick();
  //   expect(location.path()).toBe('/work');
  // }));
// });
beforeEach(fakeAsync(() => {
  router = TestBed.get(Router);
  location = TestBed.get(Location);
  fixture = TestBed.createComponent(AppComponent);
  router.navigateByUrl('/');
  advance();
}));

function advance(): void {
  flush();
  fixture.detectChanges();
}

it('Tries to route to a page', fakeAsync(() => {
  const menu = fixture.debugElement.query(By.css('a'));
  menu.triggerEventHandler('click', { button: 0 });
  advance();
  expect(location.path()).toEqual('/home');
}));
});
