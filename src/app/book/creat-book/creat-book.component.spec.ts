import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBookComponent } from './creat-book.component';

describe('CreatBookComponent', () => {
  let component: CreatBookComponent;
  let fixture: ComponentFixture<CreatBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
