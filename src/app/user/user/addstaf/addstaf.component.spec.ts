import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstafComponent } from './addstaf.component';

describe('AddstafComponent', () => {
  let component: AddstafComponent;
  let fixture: ComponentFixture<AddstafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddstafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddstafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
