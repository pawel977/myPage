import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRootComponent } from './tech-root.component';

describe('TechRootComponent', () => {
  let component: TechRootComponent;
  let fixture: ComponentFixture<TechRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
