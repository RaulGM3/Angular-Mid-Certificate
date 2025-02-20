import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedComponent } from './guarded.component';

describe('GuardedComponent', () => {
  let component: GuardedComponent;
  let fixture: ComponentFixture<GuardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
