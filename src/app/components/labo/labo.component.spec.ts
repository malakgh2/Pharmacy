import { ComponentFixture, TestBed } from '@angular/core/testing';

import { laboComponent } from './labo.component';

describe('laboComponent', () => {
  let component: laboComponent;
  let fixture: ComponentFixture<laboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ laboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(laboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
