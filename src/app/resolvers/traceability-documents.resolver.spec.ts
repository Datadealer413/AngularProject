import {TestBed} from '@angular/core/testing';

import {TraceabilityDocumentsResolver} from './traceability-documents.resolver';

describe('TraceabilityDocumentsResolver', () => {
  let resolver: TraceabilityDocumentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TraceabilityDocumentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
