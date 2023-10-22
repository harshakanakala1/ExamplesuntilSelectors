import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplepropertyandeventbindingComponent } from './examplepropertyandeventbinding.component';

describe('ExamplepropertyandeventbindingComponent', () => {
  let component: ExamplepropertyandeventbindingComponent;
  let fixture: ComponentFixture<ExamplepropertyandeventbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplepropertyandeventbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplepropertyandeventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
