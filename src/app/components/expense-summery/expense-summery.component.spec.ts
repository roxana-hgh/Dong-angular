import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSummeryComponent } from './expense-summery.component';

describe('ExpenseSummeryComponent', () => {
  let component: ExpenseSummeryComponent;
  let fixture: ComponentFixture<ExpenseSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseSummeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
