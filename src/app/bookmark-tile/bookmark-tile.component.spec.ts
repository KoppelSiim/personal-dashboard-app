import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTileComponent } from './bookmark-tile.component';

describe('BoomarkTileComponent', () => {
  let component: BookmarkTileComponent;
  let fixture: ComponentFixture<BookmarkTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
