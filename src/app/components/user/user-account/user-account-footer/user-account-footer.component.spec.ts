import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountFooterComponent } from './user-account-footer.component';

describe('UserAccountFooterComponent', () => {
  let component: UserAccountFooterComponent;
  let fixture: ComponentFixture<UserAccountFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
