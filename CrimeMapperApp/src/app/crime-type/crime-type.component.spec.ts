import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeTypeComponent } from './crime-type.component';

describe('CrimeTypeComponent', () => {
  let component: CrimeTypeComponent;
  let fixture: ComponentFixture<CrimeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
