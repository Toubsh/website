import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedTextComponent } from './displayed-text.component';

describe('DisplayedTextComponent', () => {
  let component: DisplayedTextComponent;
  let fixture: ComponentFixture<DisplayedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
