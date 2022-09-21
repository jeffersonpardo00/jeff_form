import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffFormComponent } from './jeff-form.component';

describe('JeffFormComponent', () => {
  let component: JeffFormComponent;
  let fixture: ComponentFixture<JeffFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeffFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
