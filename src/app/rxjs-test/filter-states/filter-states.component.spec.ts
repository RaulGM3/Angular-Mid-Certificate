import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatesComponent } from './filter-states.component';

describe('FilterStatesComponent', () => {
  let component: FilterStatesComponent;
  let fixture: ComponentFixture<FilterStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
