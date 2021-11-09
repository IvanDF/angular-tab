import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemComponentComponent } from './tab-item-component.component';

describe('TabItemComponentComponent', () => {
  let component: TabItemComponentComponent;
  let fixture: ComponentFixture<TabItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
