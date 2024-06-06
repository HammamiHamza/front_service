import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateLivreComponent } from './create-or-update-livre.component';

describe('CreateOrUpdateLivreComponent', () => {
  let component: CreateOrUpdateLivreComponent;
  let fixture: ComponentFixture<CreateOrUpdateLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrUpdateLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrUpdateLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
