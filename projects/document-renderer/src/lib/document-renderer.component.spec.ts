import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRendererComponent } from './document-renderer.component';

describe('DocumentRendererComponent', () => {
  let component: DocumentRendererComponent;
  let fixture: ComponentFixture<DocumentRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
