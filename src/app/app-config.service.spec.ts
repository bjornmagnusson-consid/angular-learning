import { TestBed } from '@angular/core/testing';

import { AppConfig } from './app-config.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppConfigService', () => {
  let service: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AppConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
