import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllusionComponent } from './illusion.component';

describe('IllusionComponent', () => {
  let component: IllusionComponent;
  let fixture: ComponentFixture<IllusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
