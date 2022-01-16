import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountMainComponent } from './user-account-main.component';

describe('UserAccountMainComponent', () => {
  let component: UserAccountMainComponent;
  let fixture: ComponentFixture<UserAccountMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
