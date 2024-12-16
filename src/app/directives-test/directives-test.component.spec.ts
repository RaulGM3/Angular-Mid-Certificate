import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTestComponent } from './directives-test.component';

describe('DirectivesTestComponent', () => {
  let component: DirectivesTestComponent;
  let fixture: ComponentFixture<DirectivesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
