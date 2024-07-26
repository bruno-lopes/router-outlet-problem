import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreUIAdminFooterComponent } from './core-ui-admin-footer.component';

describe('DefaultFooterComponent', () => {
  let component: CoreUIAdminFooterComponent;
  let fixture: ComponentFixture<CoreUIAdminFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreUIAdminFooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreUIAdminFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
