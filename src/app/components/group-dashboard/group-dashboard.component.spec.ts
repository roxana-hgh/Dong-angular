import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDashboardComponent } from './group-dashboard.component';

describe('GroupDashboardComponent', () => {
  let component: GroupDashboardComponent;
  let fixture: ComponentFixture<GroupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
