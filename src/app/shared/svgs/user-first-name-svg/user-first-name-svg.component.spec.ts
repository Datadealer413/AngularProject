import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFirstNameSvgComponent } from './user-first-name-svg.component';

describe('UserFirstNameSvgComponent', () => {
  let component: UserFirstNameSvgComponent;
  let fixture: ComponentFixture<UserFirstNameSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFirstNameSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFirstNameSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
