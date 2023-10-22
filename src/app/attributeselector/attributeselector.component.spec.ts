import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeselectorComponent } from './attributeselector.component';

describe('AttributeselectorComponent', () => {
  let component: AttributeselectorComponent;
  let fixture: ComponentFixture<AttributeselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
