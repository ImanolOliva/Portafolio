import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBackgroundComponent } from './animation-background.component';

describe('AnimationBackgroundComponent', () => {
  let component: AnimationBackgroundComponent;
  let fixture: ComponentFixture<AnimationBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
