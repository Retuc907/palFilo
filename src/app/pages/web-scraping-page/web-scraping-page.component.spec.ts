import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScrapingPageComponent } from './web-scraping-page.component';

describe('WebScrapingPageComponent', () => {
  let component: WebScrapingPageComponent;
  let fixture: ComponentFixture<WebScrapingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebScrapingPageComponent]
    });
    fixture = TestBed.createComponent(WebScrapingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
