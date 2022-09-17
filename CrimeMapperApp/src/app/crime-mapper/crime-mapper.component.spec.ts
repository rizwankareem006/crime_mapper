import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeMapperComponent } from './crime-mapper.component';

describe('CrimeMapperComponent', () => {
  let component: CrimeMapperComponent;
  let fixture: ComponentFixture<CrimeMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeMapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
