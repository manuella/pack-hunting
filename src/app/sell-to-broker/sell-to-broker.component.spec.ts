import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellToBrokerComponent } from './sell-to-broker.component';

describe('SellToBrokerComponent', () => {
  let component: SellToBrokerComponent;
  let fixture: ComponentFixture<SellToBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellToBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellToBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
