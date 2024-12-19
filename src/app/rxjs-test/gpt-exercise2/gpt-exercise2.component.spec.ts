import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptExercise2Component } from './gpt-exercise2.component';

describe('GptExercise2Component', () => {
  let component: GptExercise2Component;
  let fixture: ComponentFixture<GptExercise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GptExercise2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GptExercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
