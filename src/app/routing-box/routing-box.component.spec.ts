import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBoxComponent } from './routing-box.component';

describe('RoutingBoxComponent', () => {
  let component: RoutingBoxComponent;
  let fixture: ComponentFixture<RoutingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
