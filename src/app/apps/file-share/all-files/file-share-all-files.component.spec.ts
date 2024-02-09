import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareAllFilesComponent} from './file-share-all-files.component';

describe('FileShareAllFilesComponent', () => {
  let component: FileShareAllFilesComponent;
  let fixture: ComponentFixture<FileShareAllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareAllFilesComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
