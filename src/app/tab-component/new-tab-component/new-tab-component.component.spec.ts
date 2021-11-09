import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTabComponentComponent } from './new-tab-component.component';

describe('NewTabComponentComponent', () => {
  let component: NewTabComponentComponent;
  let fixture: ComponentFixture<NewTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTabComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
