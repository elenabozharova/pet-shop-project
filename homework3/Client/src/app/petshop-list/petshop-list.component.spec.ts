import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopListComponent } from './petshop-list.component';

describe('PetshopListComponent', () => {
  let component: PetshopListComponent;
  let fixture: ComponentFixture<PetshopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
