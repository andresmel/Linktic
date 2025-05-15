import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaisesComponent } from './listpaises.component';

describe('ListpaisesComponent', () => {
  let component: ListpaisesComponent;
  let fixture: ComponentFixture<ListpaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListpaisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
