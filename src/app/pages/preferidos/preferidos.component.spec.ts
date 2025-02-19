import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferidosComponent } from './preferidos.component';

describe('PreferidosComponent', () => {
  let component: PreferidosComponent;
  let fixture: ComponentFixture<PreferidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferidosComponent]
    });
    fixture = TestBed.createComponent(PreferidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
