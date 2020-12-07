import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopClientComponent } from './petshop-client.component';

describe('PetshopClientComponent', () => {
  let component: PetshopClientComponent;
  let fixture: ComponentFixture<PetshopClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
