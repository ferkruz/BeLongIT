import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidloginComponent } from './vidlogin.component';

describe('VidloginComponent', () => {
  let component: VidloginComponent;
  let fixture: ComponentFixture<VidloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
