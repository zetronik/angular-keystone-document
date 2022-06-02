import { TestBed } from '@angular/core/testing';

import { DocumentRendererService } from './document-renderer.service';

describe('DocumentRendererService', () => {
  let service: DocumentRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
