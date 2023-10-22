import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassselectorComponent } from './classselector.component';

describe('ClassselectorComponent', () => {
  let component: ClassselectorComponent;
  let fixture: ComponentFixture<ClassselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
