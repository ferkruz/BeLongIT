import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepdfComponent } from './tablepdf.component';

describe('TablepdfComponent', () => {
  let component: TablepdfComponent;
  let fixture: ComponentFixture<TablepdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
