import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoonCreditsComponent } from './noon-credits.component';

describe('NoonCreditsComponent', () => {
  let component: NoonCreditsComponent;
  let fixture: ComponentFixture<NoonCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoonCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoonCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
