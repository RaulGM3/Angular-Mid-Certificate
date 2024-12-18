import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptExercise1Component } from './gpt-exercise1.component';

describe('GptExercise1Component', () => {
  let component: GptExercise1Component;
  let fixture: ComponentFixture<GptExercise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GptExercise1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GptExercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
