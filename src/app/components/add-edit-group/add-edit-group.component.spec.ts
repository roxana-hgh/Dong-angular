import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGroupComponent } from './add-edit-group.component';

describe('AddEditGroupComponent', () => {
  let component: AddEditGroupComponent;
  let fixture: ComponentFixture<AddEditGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
