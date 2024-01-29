import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndCreateComponent } from './search-and-create.component';

describe('SearchAndCreateComponent', () => {
  let component: SearchAndCreateComponent;
  let fixture: ComponentFixture<SearchAndCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAndCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAndCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
