import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadsComponent } from './user-uploads.component';

describe('UserUploadsComponent', () => {
  let component: UserUploadsComponent;
  let fixture: ComponentFixture<UserUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
