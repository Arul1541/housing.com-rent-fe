import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsInputExampleComponent } from './chips-input-example.component';

describe('ChipsInputExampleComponent', () => {
  let component: ChipsInputExampleComponent;
  let fixture: ComponentFixture<ChipsInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsInputExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
