import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountAsideComponent } from './user-account-aside.component';

describe('UserAccountAsideComponent', () => {
  let component: UserAccountAsideComponent;
  let fixture: ComponentFixture<UserAccountAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
